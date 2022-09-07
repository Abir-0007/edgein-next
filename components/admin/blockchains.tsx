// in posts.js
import React, { FC, useRef, useState } from 'react';

import {
  SearchInput,
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  EditButton,
  TextInput,
  Pagination
} from "react-admin";

import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const filters = [
  <TextInput key="search" source="name" label="Search Name" resettable alwaysOn />
];

const PostPagination = () => <Pagination rowsPerPageOptions={[5, 10, 25, 50, 100, 250]} />;

export const BlockchainsList = () => (
  <List filters={filters}
    pagination={<PostPagination />}
    sx={{
      '.css-1d00q76-MuiToolbar-root-RaListToolbar-root': {
        justifyContent: 'flex-start'
      }
    }}
  >
    <Datagrid>
      <EditButton />
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

interface TitleProps {
  record?: Record<string, string>;
}

const BlockchainsTitle = ({ record }: TitleProps) => {
  return <span>Blockchain {record ? `"${record.name}"` : ""}</span>;
};

export const BlockchainsEdit = () => (
  <Edit title={<BlockchainsTitle />}
    sx={{
      '.MuiFormHelperText-root': {
        display: 'none',
      }
    }}
  >
    <SimpleForm>
      <TextInput
        className="w-full px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        disabled
        source="id"
      />
      <TextInput
        className="w-full px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
        source="name"
      />
    </SimpleForm>
  </Edit>
);

export const BlockchainsCreate = () => {

  const [isIcon, setIsIcon] = React.useState(false)
  const [keyword, setKeyword] = React.useState('');

  type Props = {
    googleKeyWord: string,
  };
  const RenderGoogleIcon: FC<Props> = ({ googleKeyWord }) => {
    const url = "https://www.google.com/search?q=" + googleKeyWord
    return (
      <div style={{ position: 'absolute', top: '70px' }}>
        <a href={url} target="_blank" rel="noreferrer">
          <GoogleIcon />
        </a>
      </div>)
  }

  const RenderLinkedinIcon: FC<Props> = ({ googleKeyWord }) => {
    const url = "https://www.google.com/search?q=" + googleKeyWord + " Linkedin"

    return (
      <div style={{ position: 'absolute', top: '70px', left: '45px' }}>
        <a href={url} target="_blank" rel="noreferrer">
          <LinkedInIcon /></a>
      </div>)
  }
  const RenderGitHubIcon: FC<Props> = ({ googleKeyWord }) => {
    const url = "https://www.google.com/search?q=" + googleKeyWord + " Github"

    return (
      <div style={{ position: 'absolute', top: '70px', left: '80px' }}>
        <a href={url} target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
      </div>)
  }

  const RenderCBIcon: FC<Props> = ({ googleKeyWord }) => {
    const url = "https://www.google.com/search?q=" + googleKeyWord + "  Crunchbase"
    const cb_logo = "https://www.vectorlogo.zone/logos/crunchbase/crunchbase-icon.svg"

    return (
      <div style={{ position: 'absolute', top: '70px', left: '115px' }}>
        <a href={url} target="_blank" rel="noreferrer">
          <img
            className="w-[25px] h-[25px]"
            src={cb_logo}
            alt={cb_logo}
          />
        </a>
      </div>)
  }


  const handleIcon = (e: any) => {
    setIsIcon(e.target.value.length > 0 ? true : false);
    setKeyword(e.target.value);
  }
  return (
    <Create title="Create a Blockchain"
      sx={{
        '.MuiFormHelperText-root': {
          display: 'none',
        }
      }}
    >
      <div className='customForm' style={{ position: 'relative' }}>

        <SimpleForm>
          <TextInput
            className="w-full px-3 py-1.5 text-lg text-dark-500 rounded-md border border-slate-300 outline-none"
            source="name"
            onChange={handleIcon}

          />
          {isIcon &&
            <>
              <RenderGoogleIcon googleKeyWord={keyword} />
              <RenderLinkedinIcon googleKeyWord={keyword} />
              <RenderGitHubIcon googleKeyWord={keyword} />
              <RenderCBIcon googleKeyWord={keyword} />
            </>}
        </SimpleForm>
      </div>
    </Create>)
}
