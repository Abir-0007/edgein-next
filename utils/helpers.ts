import isArray from "lodash/isArray";
import isEqual from "lodash/isEqual";
import isEmpty from "lodash/isEmpty";
import isObject from "lodash/isObject";
import { Filters } from "@/components/Companies/ElemCompaniesFilter";
import {
  Companies_Bool_Exp,
} from "@/graphql/types";
import { DeepPartial } from "@/pages/companies";
import {
  EXPLORE_MENU_OPEN_KEY,
  MY_EDGEIN_MENU_OPEN_KEY,
  MY_GROUPS_MENU_OPEN_KEY,
  MY_LISTS_MENU_OPEN_KEY,
} from "./constants";

const makeObjectWithoutPrototype = () => Object.create(null);

export const getUpdatedDiff = (original: any, target: any) => {
  if (original === target) return {};

  if (!original && !target) return {};

  if (!isObject(original) || !isObject(target)) return target;

  if (isArray(original) && isArray(target) && !isEqual(original, target))
    return target;

  return Object.keys(target).reduce((acc, key) => {
    if (original.hasOwnProperty(key)) {
      const difference = getUpdatedDiff(
        original[key as keyof {}],
        target[key as keyof {}]
      );

      if (key === "geopoint" && !isEmpty(difference)) {
        acc[key] = target[key as keyof {}];
        return acc;
      }

      if (!isArray(difference) && isObject(difference) && isEmpty(difference)) {
        return acc;
      }

      if (
        !original[key as keyof {}] &&
        isObject(difference) &&
        (isEmpty(difference) ||
          Object.values(difference).every((item) => !item))
      ) {
        return acc;
      }

      acc[key] = difference;
      return acc;
    }

    if (target[key as keyof {}]) {
      acc[key] = target[key as keyof {}];
    }

    return acc;
  }, makeObjectWithoutPrototype());
};

export const getFullAddress = (locationJson: any) => {
  const address = locationJson?.address || '';
  const city = locationJson?.city || '';
  const state = locationJson?.state || '';
  const country = locationJson?.country || '';
  return [address, city, state, country]
    .filter((item) => !isEmpty(item))
    .join(", ");
}

export const processCompaniesFilters = (
  filters: DeepPartial<Companies_Bool_Exp>,
  selectedFilters: Filters | null,
) => {
  if (!selectedFilters) {
		filters._and = [{ slug: { _neq: "" } }];
	}
  if (selectedFilters?.country?.tags?.length) {
    if (selectedFilters?.country?.condition === "any") {
      filters._and?.push({
        _or: selectedFilters.country.tags.map((item) => ({
          location_json: {
            _cast: {
              String: {_ilike: `%"country": "${item}"%`}
            },
          },
        })),
      });
    }

    if (selectedFilters?.country?.condition === "none") {
      filters._and?.push({
        _or: [
          {
            _not: {
              _or: selectedFilters.country.tags.map((item) => ({
                location_json: {
                  _cast: {
                    String: {_ilike: `%"country": "${item}"%`}
                  },
                },
              })),
            },
          },
          {
            location_json: { _is_null: true },
          },
        ],
      });
    }
  }

  if (selectedFilters?.state?.tags?.length) {
		if (selectedFilters?.state?.condition === "any") {
      filters._and?.push({
        _or: selectedFilters.state.tags.map((item) => ({
          location_json: {
            _cast: {
              String: {_ilike: `%"state": "${item}"%`}
            },
          },
        })),
      });
    }

    if (selectedFilters?.state?.condition === "none") {
      filters._and?.push({
        _or: [
          {
            _not: {
              _or: selectedFilters.state.tags.map((item) => ({
                location_json: {
                  _cast: {
                    String: {_ilike: `%"state": "${item}"%`}
                  },
                },
              })),
            },
          },
          {
            location_json: { _is_null: true },
          },
        ],
      });
    }
  }

  if (selectedFilters?.city?.tags?.length) {
		if (selectedFilters?.city?.condition === "any") {
      filters._and?.push({
        _or: selectedFilters.city.tags.map((item) => ({
          location_json: {
            _cast: {
              String: {_ilike: `%"city": "${item}"%`}
            },
          },
        })),
      });
    }

    if (selectedFilters?.city?.condition === "none") {
      filters._and?.push({
        _or: [
          {
            _not: {
              _or: selectedFilters.city.tags.map((item) => ({
                location_json: {
                  _cast: {
                    String: {_ilike: `%"city": "${item}"%`}
                  },
                },
              })),
            },
          },
          {
            location_json: { _is_null: true },
          },
        ],
      });
    }
  }

  if (selectedFilters?.keywords?.tags?.length) {
    filters._and?.push({
      _or: selectedFilters.keywords.tags.map((item) => ({
        overview: { _ilike: `%${item}%` },
      })),
    });
  }

  if (selectedFilters?.industry?.tags?.length) {
    filters._and?.push({
      _and: selectedFilters.industry.tags.map((item) => ({
        tags: { _contains: item },
      })),
    });
  }

  if (selectedFilters?.fundingType?.tags?.length) {
    filters._and?.push({
      investment_rounds: {
        _and: selectedFilters.fundingType.tags.map((item) => ({
          round: { _eq: item },
        })),
      },
    });
  }

	if (selectedFilters?.fundingAmount?.maxVal) {
    filters._and?.push({
      _and: [
        {
          investor_amount: { _gt: selectedFilters.fundingAmount?.minVal ?? 0 },
        },
        { investor_amount: { _lte: selectedFilters?.fundingAmount?.maxVal } },
      ],
    });
  }

  if (
    selectedFilters?.lastFundingDate?.condition &&
    selectedFilters?.lastFundingDate?.fromDate
  ) {
    if (selectedFilters?.lastFundingDate?.condition !== "custom") {
      filters._and?.push({
        investment_rounds: {
          round_date: { _gte: selectedFilters.lastFundingDate.fromDate },
        },
      });
    }
    if (
      selectedFilters?.lastFundingDate?.condition === "custom" &&
      selectedFilters.lastFundingDate.toDate
    ) {
      filters._and?.push({
        investment_rounds: {
          _and: [
            { round_date: { _gte: selectedFilters.lastFundingDate.fromDate } },
            { round_date: { _lte: selectedFilters.lastFundingDate.toDate } },
          ],
        },
      });
    }
  }

  if (selectedFilters?.fundingInvestors?.tags?.length) {
    if (selectedFilters.fundingInvestors.condition === "any") {
      filters._and?.push({
        investment_rounds: {
          _or: selectedFilters.fundingInvestors.tags.map((item) => ({
            investments: {
              _or: [
                {
                  vc_firm: {
                    _or: [{ name: { _ilike: `%${item}%` } }],
                  },
                },
              ],
            },
          })),
        },
      });
    }

    if (selectedFilters.fundingInvestors.condition === "none") {
      filters._and?.push({
        _not: {
          investment_rounds: {
            _or: selectedFilters.fundingInvestors.tags.map((item) => ({
              investments: {
                _or: [
                  {
                    vc_firm: {
                      _or: [{ name: { _ilike: `%${item}%` } }],
                    },
                  },
                ],
              },
            })),
          },
        },
      });
    }
  }

  if (selectedFilters?.teamSize?.maxVal) {
  	filters._and?.push({
  		_and: [
  			{ total_employees: { _gt: selectedFilters?.teamSize?.minVal ?? 0 } },
  			{ total_employees: { _lte:selectedFilters?.teamSize?.maxVal } },
  		],
  	});
  }
}

export const clearLocalStorage = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (
      key &&
      ![
        MY_EDGEIN_MENU_OPEN_KEY,
        MY_LISTS_MENU_OPEN_KEY,
        MY_GROUPS_MENU_OPEN_KEY,
        EXPLORE_MENU_OPEN_KEY,
      ].includes(key)
    ) {
      localStorage.removeItem(key);
    }
  }
};
