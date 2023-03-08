import {
	email,
	required,
	minLength,
	number,
	minValue,
	maxValue,
	regex,
} from "react-admin";

const urlPattern = new RegExp(
	"^(https?:\\/\\/)?" + // protocol
		"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
		"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
		"(\\:\\d+)?(\\/[-a-z\\d@:%_+.~#?&//=]*)*" + // port and path
		"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
		"(\\#[-a-z\\d_]*)?$",
	"i"
); // fragment locator

export const validateName = [required(), minLength(3)];
export const validateSlug = [required(), minLength(3)];
export const validateYearFounded = [number(), minValue(1900), maxValue(2099)];
//export const validateUrl = regex(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Must be a valid Url')
export const validateUrl = regex(
	/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?$/s,
	"Must be a valid Url"
);

export const validateEmail = email();

export const validateNameAndSlugAndEmailAndDomain = async (
	isEdit: boolean,
	values: any,
	data: any
) => {
	const errors: any = {};
	if (!values?.name) {
		errors.name = "The Name is required";
	}
	if (!values?.slug) {
		errors.slug = "The Slug is required";
	} else if (values?.slug.length < 3) {
		errors.age = "Must be over 3";
	}

	var emailPattern =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (data && data?.length > 0) {
		let filterSlug,
			filterGithub,
			filterLinkedin,
			filterWebsite,
			filterGlassdoor,
			filterdiscord,
			filterCompanyLinkedin,
			filterTwitter: any[] | undefined;

		filterSlug =
			values?.slug &&
			data?.filter((f: any) => f?.slug === values?.slug && f.id !== values?.id);
		filterGithub =
			values?.github &&
			data?.filter(
				(f: any) => f?.github === values?.github && f.id !== values?.id
			);
		filterLinkedin =
			values?.linkedin &&
			data?.filter(
				(f: any) => f?.linkedin === values?.linkedin && f.id !== values?.id
			);
		filterWebsite =
			values?.website &&
			data?.filter(
				(f: any) => f?.website === values?.website && f.id !== values?.id
			);
		filterGlassdoor =
			values?.glassdoor &&
			data?.filter(
				(f: any) => f?.glassdoor === values?.glassdoor && f.id !== values?.id
			);
		filterdiscord =
			values?.discord &&
			data?.filter(
				(f: any) => f?.discord === values?.discord && f.id !== values?.id
			);
		filterCompanyLinkedin =
			values?.company_linkedin &&
			data?.filter(
				(f: any) =>
					f?.company_linkedin === values?.company_linkedin &&
					f.id !== values?.id
			);
		filterTwitter =
			values?.twitter &&
			data?.filter(
				(f: any) => f?.twitter === values?.twitter && f.id !== values?.id
			);

		if (filterSlug && filterSlug?.length > 0) {
			errors.slug = "Slug already used";
		}
		if (filterGithub && filterGithub?.length > 0 && values?.github !== "") {
			errors.github = "Github already used";
		}
		if (
			filterLinkedin &&
			filterLinkedin?.length > 0 &&
			values?.linkedin !== ""
		) {
			errors.linkedin = "Linkedin already used";
		}
		if (filterWebsite && filterWebsite?.length > 0 && values?.website !== "") {
			errors.website = "Website already used";
		}
		if (
			filterGlassdoor &&
			filterGlassdoor?.length > 0 &&
			values?.glassdoor !== ""
		) {
			errors.glassdoor = "Glassdoor already used";
		}
		if (filterdiscord && filterdiscord?.length > 0 && values?.discord !== "") {
			errors.discord = "Discord already used";
		}
		if (
			filterCompanyLinkedin &&
			filterCompanyLinkedin?.length > 0 &&
			values?.company_linkedin !== ""
		) {
			errors.company_linkedin = "Company Linkedin already used";
		}
		if (filterTwitter && filterTwitter?.length > 0 && values?.twitter !== "") {
			errors.twitter = "Twitter already used";
		}

		if (
			values.hasOwnProperty("website") &&
			values?.website !== "" &&
			!urlPattern.test(values?.website)
		) {
			errors.website = "Website URL is not valid";
		}
		if (
			values.hasOwnProperty("github") &&
			values?.github !== "" &&
			!urlPattern.test(values?.github)
		) {
			errors.github = "Github URL is not valid";
		}
		if (
			values.hasOwnProperty("twitter") &&
			values?.twitter !== "" &&
			!urlPattern.test(values?.twitter)
		) {
			errors.twitter = "Twitter URL is not valid";
		}
		if (
			values.hasOwnProperty("company_linkedin") &&
			values?.company_linkedin !== "" &&
			!urlPattern.test(values?.company_linkedin)
		) {
			errors.company_linkedin = "Linkedin URL is not valid";
		}
		if (
			values.hasOwnProperty("linkedin") &&
			values?.linkedin !== "" &&
			!urlPattern.test(values?.linkedin)
		) {
			errors.linkedin = "Linkedin URL is not valid";
		}
		if (
			values.hasOwnProperty("discord") &&
			values?.discord !== "" &&
			!urlPattern.test(values?.discord)
		) {
			errors.discord = "Discord URL is not valid";
		}
		if (
			values.hasOwnProperty("glassdoor") &&
			values?.glassdoor !== "" &&
			!urlPattern.test(values?.glassdoor)
		) {
			errors.glassdoor = "Glassdoor URL is not valid";
		}
		if (
			values.hasOwnProperty("work_email") &&
			values?.work_email !== "" &&
			!emailPattern.test(values?.work_email)
		) {
			errors.work_email = "Work Email is not valid";
		}
		if (
			values.hasOwnProperty("personal_email") &&
			values?.personal_email !== "" &&
			!emailPattern.test(values?.personal_email)
		) {
			errors.personal_email = "Personal Email is not valid";
		}
	}

	return errors;
};

export const validateFieldsForEdit = async (
	isEdit: boolean,
	values: any,
	data: any
) => {
	const errors: any = {};
	if (!values?.logo) {
		errors.logo = "The Image is required";
	}
	if (!values?.name) {
		errors.name = "The Name is required";
	}
	if (!values?.slug) {
		errors.slug = "The Slug is required";
	} else if (values?.slug.length < 3) {
		errors.age = "Must be over 3";
	}
	if (!values?.overview) {
		errors.overview = "The description is required";
	}
	if (!values?.layer) {
		errors.layer = "Company type is required";
	}
	if (!values?.tags || values?.tags.length < 1) {
		errors.tags = "Industry is required";
	}
	if (!values?.year_founded) {
		errors.year_founded = "Founded Date is required";
	}
	if (!values?.website) {
		errors.website = "Website URL is required";
	}

	var emailPattern =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (
		values.hasOwnProperty("website") &&
		values?.website !== "" &&
		!urlPattern.test(values?.website)
	) {
		errors.website = "Website URL is not valid";
	}
	if (
		values.hasOwnProperty("github") &&
		values?.github !== "" &&
		!urlPattern.test(values?.github)
	) {
		errors.github = "Github URL is not valid";
	}
	if (
		values.hasOwnProperty("twitter") &&
		values?.twitter !== "" &&
		!urlPattern.test(values?.twitter)
	) {
		errors.twitter = "Twitter URL is not valid";
	}
	if (
		values.hasOwnProperty("company_linkedin") &&
		values?.company_linkedin !== "" &&
		!urlPattern.test(values?.company_linkedin)
	) {
		errors.company_linkedin = "Linkedin URL is not valid";
	}
	if (
		values.hasOwnProperty("linkedin") &&
		values?.linkedin !== "" &&
		!urlPattern.test(values?.linkedin)
	) {
		errors.linkedin = "Linkedin URL is not valid";
	}
	if (
		values.hasOwnProperty("discord") &&
		values?.discord !== "" &&
		!urlPattern.test(values?.discord)
	) {
		errors.discord = "Discord URL is not valid";
	}
	if (
		values.hasOwnProperty("glassdoor") &&
		values?.glassdoor !== "" &&
		!urlPattern.test(values?.glassdoor)
	) {
		errors.glassdoor = "Glassdoor URL is not valid";
	}
	if (
		values.hasOwnProperty("white_paper") &&
		values?.white_paper !== "" &&
		!urlPattern.test(values?.white_paper)
	) {
		errors.white_paper = "White paper URL is not valid";
	}
	if (
		values.hasOwnProperty("careers_page") &&
		values?.careers_page !== "" &&
		!urlPattern.test(values?.careers_page)
	) {
		errors.careers_page = "Careers page URL is not valid";
	}
	if (
		values.hasOwnProperty("work_email") &&
		values?.work_email !== "" &&
		!emailPattern.test(values?.work_email)
	) {
		errors.work_email = "Work Email is not valid";
	}
	if (
		values.hasOwnProperty("personal_email") &&
		values?.personal_email !== "" &&
		!emailPattern.test(values?.personal_email)
	) {
		errors.personal_email = "Personal Email is not valid";
	}

	return errors;
};

export const validateTeamMember = async (isEdit: boolean, values: any) => {
	const errors: any = {};
	if (!values?.person_id) {
		errors.person = "Person is required";
	}
	if (!values?.function) {
		errors.function = "Position is required";
	}
	return errors;
};

export const validateInvestmentRounds = async (
	isEdit: boolean,
	values: any
) => {
	const errors: any = {};
	if (!values?.round) {
		errors.round = "Round Type is required";
	}
	if (!values?.amount) {
		errors.amount = "Money Raised is required";
	}
	return errors;
};

export const functionChoicesTM = [
	{
		id: "Operations",
		name: "Operations",
	},
	{
		id: "Engineering",
		name: "Engineering",
	},
	{
		id: "Marcomm",
		name: "Marcomm",
	},
	{
		id: "Design",
		name: "Design",
	},
	{
		id: "Product",
		name: "Product",
	},
	{
		id: "Business Development",
		name: "Business Development",
	},
	{
		id: "Technical",
		name: "Technical",
	},
	{
		id: "Finance",
		name: "Finance",
	},
	{
		id: "Legal",
		name: "Legal",
	},
	{
		id: "HR",
		name: "HR",
	},
	{
		id: "Sales",
		name: "Sales",
	},
	{
		id: "Training & Dev",
		name: "Training & Dev",
	},
	{
		id: "QA",
		name: "QA",
	},
];

export const seniorityChoicesTM = [
	{
		id: "Executive/ VP / C-Level",
		name: "Executive/ VP / C-Level",
	},
	{
		id: "Individual Contributor",
		name: "Individual Contributor",
	},
	{
		id: "Manager / Director",
		name: "Manager / Director",
	},
];

export const companyChoices = [
	{
		id: "Trending",
		name: "Trending",
	},
	{
		id: "Following",
		name: "Following (Upcoming)",
		disabled: true,
	},
	{
		id: "Acquired",
		name: "Acquired",
	},
	{
		id: "Dead",
		name: "Dead",
	},
];

export const companyLayerChoices = [
	{
		id: "Layer 0",
		name: "Layer 0 - Native Code",
	},
	{
		id: "Layer 1",
		name: "Layer 1 - Programmable Blockchains / Networks",
	},
	{
		id: "Layer 2",
		name: "Layer 2 - Nodes / Node Providers / Data Platforms",
	},
	{
		id: "Layer 3",
		name: "Layer 3 - API's / API Providers / Systems",
	},
	{
		id: "Layer 4",
		name: "Layer 4 - Decentralized Platforms / Contract / Modeling",
	},
	{
		id: "Layer 5",
		name: "Layer 5 - Applications",
	},
	{
		id: "Layer 6",
		name: "Layer 6 - Interoperable Digital Assets / NFT's",
	},
];
export const roundChoices = [
	{
		id: "Pre-seed",
		name: "Pre-seed",
	},
	{
		id: "Seed",
		name: "Seed",
	},
	{
		id: "Pre-Series A",
		name: "Pre-Series A",
	},
	{
		id: "Series A",
		name: "Series A",
	},
	{
		id: "Series B",
		name: "Series B",
	},
	{
		id: "Series C",
		name: "Series C",
	},
	{
		id: "Series D",
		name: "Series D",
	},
	{
		id: "Series E",
		name: "Series E",
	},
	{
		id: "Series F",
		name: "Series F",
	},
	{
		id: "Series G",
		name: "Series G",
	},
	{
		id: "Series H",
		name: "Series H",
	},
	{
		id: "ICO",
		name: "ICO",
	},
	{
		id: "Venture Round",
		name: "Venture Round",
	},
	{
		id: "Acquisition",
		name: "Acquisition",
	},
];

export const currencyChoices = [
	{
		id: "USD",
		name: "USD",
	},
	{
		id: "CNY",
		name: "CNY",
	},
	{
		id: "EUR",
		name: "EUR",
	},
	{
		id: "INR",
		name: "INR",
	},
	{
		id: "CAD",
		name: "CAD",
	},
	{
		id: "SGD",
		name: "SGD",
	},
];

export const investorChoices = [
	{
		id: "Trending",
		name: "Trending",
	},
	{
		id: "Following",
		name: "Following (Coming soon!)",
		disabled: true,
	},
	{
		id: "Acquired",
		name: "Acquired",
	},
	{
		id: "Dead",
		name: "Dead",
	},
];

export const investorFunctionChoices = [
	{
		id: "Investment",
		name: "Investment",
	},
	{
		id: "Operations",
		name: "Operations",
	},
	{
		id: "Finances",
		name: "Finances",
	},
];

export const investorSeniorityChoices = [
	{
		id: "Managing Partner",
		name: "Managing Partner",
	},
	{
		id: "Partner",
		name: "Partner",
	},
	{
		id: "Principle",
		name: "Principle",
	},
	{
		id: "Associate",
		name: "Associate",
	},
	{
		id: "Back Office",
		name: "Back Office",
	},
];

export const status = [
	{
		id: "draft",
		name: "Draft",
	},
	{
		id: "published",
		name: "Published",
	},
];

export const tokenTypes = {
	verifyWorkHereToken: "token-verifyworkhere",
};

export const tokenInfoMetrics = [
	{
		id: "currentPrice",
		name: "Current Price",
	},
	{
		id: "marketCap",
		name: "Market Cap",
	},
	{
		id: "marketCapRank",
		name: "Market Cap Rank",
	},
	{
		id: "highLow24H",
		name: "24-Hour High/Low",
	},
	{
		id: "vol24H",
		name: "24-Hour Volume",
	},
];

export const tags = [
	"Layer 0",
	"Layer 1",
	"Layer 2",
	"Layer 3",
	"Layer 4",
	"Layer 5",
	"Layer 6",
	"API",
	"Platform",
	"Dev Tools",
	"Chain Tools",
	"Analytics",
	"DApps",
	"Wallet",
	"Oracle",
	"Side Chain",
	"Database",
	"Messaging",
	"Asset",
	"Storage",
	"Marketplace",
	"Exchange",
	"Gaming",
	"DeFi",
	"Blockchain",
	"Crypto",
	"NFT",
	"Bitcoin",
	"Ethereum",
	"NEAR/OWC",
	"Cosmos",
	"Cardano",
	"OWC",
	"DAO",
	"Centralized",
	"AI",
	"SaaS",
	"Brand",
	"Stablecoin",
	"Media",
	"Event",
	"Cybersecurity",
	"Solana",
	"Polkadot",
].map((tag) => ({ id: tag, name: tag }));

export const ADMIN_REFERENCE_INPUT_PER_PAGE = 250;

export const eventSizeChoices = [
	"Less than 10 people",
	"10-15 people",
	"16-30 people",
	"31-100 people",
	"101-200 people",
	"201-500 people",
	"501-1000 people",
	"1000+ people",
].map((size) => ({ id: size, name: size }));

export const eventPersonTypeChoices = [
	{
		id: "speaker",
		name: "Speaker",
	},
	{
		id: "attendee",
		name: "Attendee",
	},
	{
		id: "organizer",
		name: "Organizer",
	},
];

export type ActionType = "Insert Data" | "Change Data" | "Delete Data";

export type ResourceTypes =
	| "companies"
	| "vc_firms"
	| "people"
	| "blockchains"
	| "coins"
	| "investment_rounds"
	| "investments"
	| "team_members"
	| "investors"
	| "events"
	| "event_person"
	| "event_organization"
	| "resource_links"
	| "news"
	| "news_organizations";

export const NODE_NAME: Record<ResourceTypes, string> = {
	companies: "company",
	vc_firms: "vc_firm",
	people: "people",
	blockchains: "blockchain",
	coins: "coin",
	investment_rounds: "investment_round",
	investments: "investment",
	team_members: "team_member",
	investors: "investor",
	events: "event",
	event_person: "event_person",
	event_organization: "event_organization",
	resource_links: "resource_link",
	news: "news",
	news_organizations: "news_organization",
};

export const isResourceType = (
	resourceType: string
): resourceType is ResourceTypes => {
	return [
		"companies",
		"vc_firms",
		"people",
		"blockchains",
		"coins",
		"investment_rounds",
		"investments",
		"team_members",
		"investors",
		"events",
		"event_person",
		"event_organization",
		"resource_links",
		"news",
		"news_organizations",
	].includes(resourceType);
};

export const DATADOME_TAGS = "https://js.datadome.co/tags.js";

export const DATADOME_JS = "https://api-js.datadome.co/js/";

export const companiesFilterOptions = [
	{
		category: "Location",
		items: [
			{
				label: "Add country",
				value: "country",
			},
			{
				label: "Add state",
				value: "state",
			},
			{
				label: "Add city",
				value: "city",
			},
			{
				label: "Add address",
				value: "address",
			},
		],
	},
	{
		category: "Description keywords",
		items: [
			{
				label: "Add keywords",
				value: "keywords",
			},
		],
	},
	{
		category: "Industry",
		items: [
			{
				label: "Select industry",
				value: "industry",
			},
		],
	},
	{
		category: "Financials",
		items: [
			{
				label: "Funding type",
				value: "fundingType",
				isPremium: true,
			},
			{
				label: "Total funding amount",
				value: "fundingAmount",
				isPremium: true,
			},
			{
				label: "Last funding date",
				value: "lastFundingDate",
				isPremium: true,
			},
			{
				label: "Investors",
				value: "fundingInvestors",
				isPremium: true,
			},
		],
	},
	{
		category: "Team",
		items: [
			{
				label: "Team size",
				value: "teamSize",
				isPremium: true,
			},
		],
	},
];

export const investorsFilterOptions = [
	{
		category: "Location",
		items: [
			{
				label: "Add country",
				value: "country",
			},
			{
				label: "Add state",
				value: "state",
			},
			{
				label: "Add city",
				value: "city",
			},
		],
	},
	{
		category: "Description keywords",
		items: [
			{
				label: "Add keywords",
				value: "keywords",
			},
		],
	},
	{
		category: "Industry",
		items: [
			{
				label: "Select industry",
				value: "industry",
			},
		],
	},
	{
		category: "Financials",
		items: [
			{
				label: "Investment type",
				value: "investmentType",
				isPremium: true,
			},
			{
				label: "Investment amount total",
				value: "investmentAmountTotal",
				isPremium: true,
			},
			{
				label: "Number of investments",
				value: "numOfInvestments",
				isPremium: true,
			},
			{
				label: "Number of exits",
				value: "numOfExits",
				isPremium: true,
			},
			{
				label: "Last investment date",
				value: "lastInvestmentDate",
				isPremium: true,
			},
			{
				label: "Funded companies",
				value: "fundedCompanies",
				isPremium: true,
			},
		],
	},
	{
		category: "Team",
		items: [
			{
				label: "Team size",
				value: "teamSize",
				isPremium: true,
			},
		],
	},
];

export const MY_EDGEIN_MENU_OPEN_KEY = "disclosure-my-edgein-menu-default-open";
export const MY_LISTS_MENU_OPEN_KEY = "disclosure-my-lists-menu-default-open";
export const MY_GROUPS_MENU_OPEN_KEY = "disclosure-my-groups-menu-default-open";
export const EXPLORE_MENU_OPEN_KEY = "disclosure-explore-menu-default-open";
