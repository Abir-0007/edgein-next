import { FC, ChangeEvent, useRef } from 'react';
import { Combobox } from '@headlessui/react';
import { FilterOptionKeys } from '@/models/Filter';
import useAddressAutocomplete from '@/hooks/use-address-autocomplete';
import { ElemFilterPopup } from './elem-filter-popup';
import { InputRadio } from './input-radio';
import { IconX } from './icons';

type Props = {
  open: boolean;
  option: FilterOptionKeys;
  title: string;
  heading?: string;
  checkedAny?: boolean;
  checkedNone?: boolean;
  tags: string[];
  placeholder?: string;
  onOpenFilterPopup: (name: FilterOptionKeys) => void;
  onCloseFilterPopup: (name: FilterOptionKeys) => void;
  onClearFilterOption: (name: FilterOptionKeys) => void;
  onApplyFilter: (name: FilterOptionKeys) => void;
  onChangeCondition?: (
    event: ChangeEvent<HTMLInputElement>,
    name: string,
  ) => void;
  onChangeTags: (selectedTags: string[], name: string) => void;
  value: any;
  onChange: (data: any) => void;
};

const ElemFilterLocation: FC<Props> = ({
  open,
  option,
  title,
  heading,
  checkedAny = false,
  checkedNone = false,
  placeholder,
  onOpenFilterPopup,
  onCloseFilterPopup,
  onClearFilterOption,
  onApplyFilter,
  onChangeCondition,
  tags,
  onChangeTags,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { isLoading, options, onInputChange } = useAddressAutocomplete([
    'country',
  ]);

  const handleSelect = (values: any[]) => {
    console.log('@values', values);
    const newTags: string[] = values.map(item => item.country || item);
    onChangeTags(newTags, option);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleRemove = (tag: string) => {
    const newTags = tags.filter(tagItem => tagItem !== tag);
    onChangeTags(newTags, option);
  };

  const handleApplyFilter = (name: FilterOptionKeys) => {
    onApplyFilter(name);
  };

  return (
    <ElemFilterPopup
      key={option}
      open={open}
      name={option}
      title={title}
      onOpen={onOpenFilterPopup}
      onClose={onCloseFilterPopup}
      onClear={onClearFilterOption}
      onApply={handleApplyFilter}
    >
      <div className="font-bold text-sm">{heading}</div>
      <div className="flex flex-col gap-4 mt-2">
        <div>
          {onChangeCondition && (
            <InputRadio
              name={option}
              value="any"
              checked={checkedAny}
              label="is any of these"
              onChange={event => onChangeCondition(event, option)}
            />
          )}

          <div className="relative">
            <Combobox multiple value={tags} onChange={handleSelect}>
              <div className="flex flex-wrap p-2 rounded-md ring-1 ring-slate-300 focus-within:ring-2 focus-within:ring-primary-500 focus-within:outline-none">
                {tags.length > 0 && (
                  <ul className="flex flex-wrap gap-2">
                    {tags.map(item => (
                      <li
                        key={item}
                        className="flex items-center gap-1 pl-3 pr-2 py-1 rounded-full text-sm bg-slate-200"
                      >
                        {item}
                        <button
                          onClick={() => handleRemove(item)}
                          className="focus:outline-none"
                          title="Remove"
                        >
                          <IconX className="w-3 h-3" title="Remove" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <Combobox.Input
                  ref={inputRef}
                  className="flex-1 px-3 py-1 text-dark-500 relative bg-white rounded-md border-none outline-none ring-0 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  displayValue={(value: any) => value?.addressLabel}
                  placeholder={placeholder}
                  onChange={onInputChange}
                />
              </div>
              <Combobox.Options className=" absolute mt-1 z-50 w-full bg-white border border-dark-500/10 divide-y divide-gray-100 shadow-xl max-h-60 rounded-md overflow-auto focus:outline-none">
                {isLoading ? (
                  <p className="text-sm p-2 animate-pulse">Searching...</p>
                ) : (
                  options.map((item: any) => (
                    <Combobox.Option
                      className={({ active }) =>
                        `${
                          active
                            ? 'text-primary-500 bg-primary-100'
                            : 'text-dark-500'
                        }  select-none relative py-2 pl-3 pr-4 cursor-pointer`
                      }
                      key={item.addressLabel}
                      value={item}
                    >
                      {item.addressLabel}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Combobox>
          </div>
        </div>
        {onChangeCondition && (
          <div>
            <InputRadio
              name={option}
              value="none"
              checked={checkedNone}
              label="is none of these"
              onChange={event => onChangeCondition(event, option)}
              labelClass="mb-0.5"
            />
          </div>
        )}
      </div>
    </ElemFilterPopup>
  );
};

export default ElemFilterLocation;
