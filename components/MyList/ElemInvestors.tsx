import { Follows_Vc_Firms, GetCompaniesByListIdQuery, GetVcFirmsByListIdQuery } from "@/graphql/types";
import { useRouter } from "next/router";
import { FC, useCallback, useEffect, useState } from "react";
import { ElemPhoto } from "../ElemPhoto";
import { IconCrap } from "../reactions/IconCrap";
import { IconHot } from "../reactions/IconHot";
import { IconLike } from "../reactions/IconLike";
import { ElemDeleteListsModal } from "./ElemDeleteListsModal";
import { ElemListsOptionMenu } from "./ElemListsOptionMenu";

type Props = {
  vcfirms?: Follows_Vc_Firms[]
  isCustomList?: boolean
  selectedListName: string | null
  getAlternateRowColor: (index: number) => string
  handleNavigation: (link: string) => void
  setIsUpdated: Function
}

export const ElemInvestors: FC<Props> = ({
  vcfirms,
  isCustomList,
  selectedListName,
  getAlternateRowColor,
  handleNavigation,
  setIsUpdated
}) => {

  const [selected, setSelected] = useState<number[]>([])

  const [showDeleteItemsModal, setShowDeleteItemsModal] = useState(false)

  const [resourceList, setResourceList] = useState<Follows_Vc_Firms[]>()

  useEffect(() => {
    if (vcfirms)
      setResourceList(vcfirms)
  }, [vcfirms])

  const toggleCheckboxes = (clearAll: boolean = false) => () => {

    if (clearAll) {
      setSelected([])
      return;
    }

    if (selected.length > 0 && resourceList?.length === selected.length) {
      setSelected([]);
    } else if ((resourceList?.length || 0) > selected.length) {
      setSelected((prev) => {
        const items = [...prev];
        resourceList?.forEach(({ id }) => {
          if (!items.includes(id as number))
            items.push(id as number)
        });
        return items
      })
    }
  }

  const toggleCheckbox = (id: number) => () => {

    setSelected((prev) => {
      const items = [...prev]

      const index = items.indexOf(id)
      if (index === -1) items.push(id)
      else items.splice(index, 1)

      return items
    })
  }

  const isChecked = useCallback((id: number) => {
    return selected.includes(id)
  }, [selected])

  const isCheckedAll = () => {
    return selected.length === resourceList?.length && Boolean(resourceList?.length)
  }

  const onRemove = async () => {
    const deleteVcfirmsRes = await fetch(`/api/delete_follows`, {
      method: 'POST',
      body: JSON.stringify({ followIds: selected }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })

    if (deleteVcfirmsRes.ok) {
      setResourceList((prev) => {
        return prev?.filter((resource) => !selected.includes(resource.id as number))
      })
      setSelected([])
      setIsUpdated((new Date()).getTime())
    }
  }
  return (
    <div className="rounded-lg p-3 bg-white col-span-3 mt-10 mb-10 ">
      <h2 className="font-bold text-dark-500 text-xl capitalize">{selectedListName}: Investors</h2>

      {
        isCustomList && selected.length > 0 &&
        <>
          <ElemListsOptionMenu
            onRemoveBtn={() => setShowDeleteItemsModal(true)}
            onClearSelection={toggleCheckboxes(true)}
          />

          <ElemDeleteListsModal
            isOpen={showDeleteItemsModal}
            onCloseModal={() => setShowDeleteItemsModal(false)}
            listName={selectedListName}
            onDelete={onRemove}
          />
        </>
      }

      <div className="mt-3 w-full rounded-lg border border-slate-200 max-h-80 overflow-auto">
        <table className="w-full">
          <thead className="">
            <tr className="text-left text-sm border-b-slate-200">
              {
                isCustomList && <th className="pl-2 px-1 border border-b-slate-200 border-r-0 border-l-0 border-t-0">
                  <input type="checkbox" className="align-middle" onChange={toggleCheckboxes()} checked={isCheckedAll()} />
                </th>
              }
              <th className="px-1 border border-b-slate-200 border-r-0 border-l-0 border-t-0">Name</th>
              <th className="px-1 border border-b-slate-200 border-r-0 border-l-0 border-t-0"># of Investments</th>
              <th className="px-1 border border-b-slate-200 border-r-0 border-l-0 border-t-0">Latest Investment Date</th>
              <th className="px-1 border border-b-slate-200 border-r-0 border-l-0 border-t-0">Reactions</th>
            </tr>
          </thead>

          <tbody>
            {
              resourceList?.map(({ vc_firm, id }, index) => (
                <tr
                  key={vc_firm?.id}
                  className={`text-left text-sm${getAlternateRowColor(index)} hover:bg-slate-100`}
                  onClick={() => handleNavigation(`/investors/${vc_firm?.slug}`)}
                  role="button"
                >
                  {
                    isCustomList && <td className="pl-2 px-1 py-2">
                      <input
                        type="checkbox"
                        onChange={toggleCheckbox(vc_firm?.id!)}
                        onClick={(e) => e.stopPropagation()}
                        checked={isChecked(id as number)}
                      />
                    </td>
                  }
                  <td
                    className="px-1 inline-flex items-center py-2"
                  >
                    <ElemPhoto
                      photo={vc_firm?.logo}
                      wrapClass="flex items-center justify-center shrink-0 w-10 h-10 p-1 bg-white rounded-lg shadow-md mr-2"
                      imgClass="object-fit max-w-full max-h-full"
                      imgAlt={'chia'}
                    />
                    {vc_firm?.name}
                  </td>
                  <td className="px-1 py-2">{vc_firm?.num_of_investments}</td>
                  <td className="px-1 py-2">May 12, 2022 {vc_firm?.latest_investments}</td>
                  <td className="px-1 py-2">
                    <div>
                      <span className="text-slate-600 font-bold items-center inline-flex mr-2"><IconHot className="mr-1" />{vc_firm?.sentiment.hot || 0}</span>
                      <span className="text-slate-600 font-bold items-center inline-flex mr-2"><IconLike className="mr-1" />{vc_firm?.sentiment.like || 0}</span>
                      <span className="text-slate-600 font-bold items-center inline-flex"><IconCrap className="mr-1" />{vc_firm?.sentiment.crap || 0}</span>
                    </div>
                  </td>
                </tr>
              ))
            }

            {
              (!resourceList || resourceList?.length === 0) &&
              <tr>
                <td colSpan={4} className="text-center px-1 py-2">No Investors</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}