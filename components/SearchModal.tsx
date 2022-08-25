import type { GetStaticProps } from "next";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import algoliasearch from "algoliasearch/lite";
import { Hit as AlgoliaHit } from "instantsearch.js";
import {
  InstantSearch,
  SearchBox,
  Hits,
  HitsPerPage,
  Highlight,
  InfiniteHits,
  Index,
  Configure,
} from "react-instantsearch-hooks-web";
import { truncate } from "lodash";

const searchClient = algoliasearch(
  "TFBKEVTOJD",
  "c1067c8b29709544620c3ca4d0702ebc"
);

Modal.setAppElement("#modal-root");

const customStyles = {
  content: {
   position:"absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    zindex: 100000,
    opacity: 1,
    borderRadius: 20,
    overlay: { backgroundColor: "red", opacity: 1 },
    width:"50%",
    height:"550px"
  },
};
type CompaniesHitProps = {
  hit: AlgoliaHit<{
    name: string;
    overview: string;
    logo: string;
    slug: string;
  }>;
};

type InvestorsHitProps = {
  hit: AlgoliaHit<{
    vc_firm_name: string;
    vc_firm_logo: string;
    vc_firm_slug: string;
  }>;
};

type PeopleHitProps = {
  hit: AlgoliaHit<{
    name: string;
    work_email: string;
    personal_email: string;
    picture: string;
    slug: string;
  }>;
};

function CompaniesHit({ hit }: CompaniesHitProps) {
  return (
    <div>
      <a href={`/companies/${hit.slug}`}>
        <div className=" my-3 flex flex-row flex-start">
          <img
            className="w-10 h-10 border-solid border-2 border-gray-200 rounded-md"
            src={hit.logo}
            alt={hit.logo}
          />
          <h1 className="whitespace nowrap ml-2 text-xs mt-2">
            <b>{hit.name}</b>
          </h1>
          <p className=" ml-3 mt-2 text-xs ">
            {truncate(hit.overview, { omission: "...", length: 80 })}
          </p>
        </div>
      </a>
    </div>
  );
}

function InvestorsHit({ hit }: InvestorsHitProps) {
  return (
    <div>
      <a href={`/investors/${hit.vc_firm_slug}`}>
        <div className=" my-2 flex flex-row flex-start">
          <img
            className="w-10 h-10 border-solid border-2 border-gray-200 rounded-md"
            src={hit.vc_firm_logo }
            alt={hit.vc_firm_logo }
          />
          <h1 className=" mt-2 ml-2 text-xs">
            <b>{hit.vc_firm_name}</b>
          </h1>
        </div>
      </a>
    </div>
  );
}

function PeopleHit({ hit }: PeopleHitProps) {
  return (
    <div>
      <a href={`/people/${hit.slug}`}>
        <div className="my-2 flex flex-row flex-start">
          <img
            className="w-10 h-10 border-solid border-2 border-gray-200 rounded-md"
            src={hit.picture}
            alt={hit.picture}
          />
          <h1 className=" ml-2 text-xs mt-3">
            <b>{hit.name}</b>
          </h1>
        </div>
      </a>
    </div>
  );
}

export default function SearchModal(props: any) {

  const onClose = () => {
    props.onClose();
  };

  return (
    <Modal
      isOpen={props.show}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Login Modal"
    
    >
      <div className="max-w-6xl sm:px-3 lg:min-h-[40vh] lg:max-h-[2vh]">
        <div className="bg-white rounded-2xl center">
          <InstantSearch searchClient={searchClient} indexName="companies">
            <SearchBox
              placeholder="Search"
              classNames={{
                submitIcon: "hidden",
                resetIcon: "hidden",
                loadingIndicator: "hidden",
                input:
                  " w-full bg-transaparent text-dark-500  rounded-md  outline-none placeholder:text-dark-400 focus:bg-white focus:outline-none",
              }}
            />
            <hr className="max-w-8xl mt-3 -ml-10 -mr-8 "></hr>
            <Configure
              analytics={false}
              hitsPerPage={3}
            />
            <Index indexName="companies">
              <h1 className="font-bold my-1">Companies</h1>
              <InfiniteHits
                classNames={{
                  loadMore:
                    "w-full mb-5 text-sm text-primary-500 bg-transparent focus:ring-primary-800 border-2 border-primary-500 hover:bg-primary-100 rounded-full px-3 py-1 min-w-32 justify-center",
                }}
                showPrevious={false}
                hitComponent={CompaniesHit}
              />
            </Index>

            <Index indexName="investors">
              <h1 className="font-bold my-1">Investors</h1>
              <InfiniteHits
                classNames={{
                  loadMore:
                    "w-full mb-5 text-sm text-primary-500 bg-transparent focus:ring-primary-800 border-2 border-primary-500 hover:bg-primary-100 rounded-full px-3 py-1 min-w-32 justify-center",
                }}
                showPrevious={false}
                hitComponent={InvestorsHit}
              />
            </Index>
            <Index indexName="people">
              <h1 className="font-bold my-2">People</h1>
              <InfiniteHits
                classNames={{
                  loadMore:
                    "w-full mb-5 text-sm text-primary-500 bg-transparent focus:ring-primary-800 border-2 border-primary-500 hover:bg-primary-100 rounded-full px-3 py-1 min-w-32 justify-center",
                }}
                showPrevious={false}
                hitComponent={PeopleHit}
              />
            </Index>
          </InstantSearch>
        </div>
      </div>
    </Modal>
  );
}
