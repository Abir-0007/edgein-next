import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from './fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  float8: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Boolean']>;
  _gt: InputMaybe<Scalars['Boolean']>;
  _gte: InputMaybe<Scalars['Boolean']>;
  _in: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['Boolean']>;
  _lte: InputMaybe<Scalars['Boolean']>;
  _neq: InputMaybe<Scalars['Boolean']>;
  _nin: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Int']>;
  _gt: InputMaybe<Scalars['Int']>;
  _gte: InputMaybe<Scalars['Int']>;
  _in: InputMaybe<Array<Scalars['Int']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['Int']>;
  _lte: InputMaybe<Scalars['Int']>;
  _neq: InputMaybe<Scalars['Int']>;
  _nin: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq: InputMaybe<Scalars['String']>;
  _gt: InputMaybe<Scalars['String']>;
  _gte: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['String']>;
  _in: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['String']>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['String']>;
  _lt: InputMaybe<Scalars['String']>;
  _lte: InputMaybe<Scalars['String']>;
  _neq: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['String']>;
  _nin: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "actions" */
export type Actions = {
  __typename?: 'actions';
  action: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  page: Scalars['String'];
  properties: Scalars['jsonb'];
  resource: Maybe<Scalars['String']>;
  resource_id: Maybe<Scalars['Int']>;
  user: Scalars['Int'];
};


/** columns and relationships of "actions" */
export type ActionsPropertiesArgs = {
  path: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "actions" */
export type Actions_Aggregate = {
  __typename?: 'actions_aggregate';
  aggregate: Maybe<Actions_Aggregate_Fields>;
  nodes: Array<Actions>;
};

/** aggregate fields of "actions" */
export type Actions_Aggregate_Fields = {
  __typename?: 'actions_aggregate_fields';
  avg: Maybe<Actions_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Actions_Max_Fields>;
  min: Maybe<Actions_Min_Fields>;
  stddev: Maybe<Actions_Stddev_Fields>;
  stddev_pop: Maybe<Actions_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Actions_Stddev_Samp_Fields>;
  sum: Maybe<Actions_Sum_Fields>;
  var_pop: Maybe<Actions_Var_Pop_Fields>;
  var_samp: Maybe<Actions_Var_Samp_Fields>;
  variance: Maybe<Actions_Variance_Fields>;
};


/** aggregate fields of "actions" */
export type Actions_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Actions_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Actions_Append_Input = {
  properties: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Actions_Avg_Fields = {
  __typename?: 'actions_avg_fields';
  id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
  user: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "actions". All fields are combined with a logical 'AND'. */
export type Actions_Bool_Exp = {
  _and: InputMaybe<Array<Actions_Bool_Exp>>;
  _not: InputMaybe<Actions_Bool_Exp>;
  _or: InputMaybe<Array<Actions_Bool_Exp>>;
  action: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  page: InputMaybe<String_Comparison_Exp>;
  properties: InputMaybe<Jsonb_Comparison_Exp>;
  resource: InputMaybe<String_Comparison_Exp>;
  resource_id: InputMaybe<Int_Comparison_Exp>;
  user: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "actions" */
export enum Actions_Constraint {
  /** unique or primary key constraint */
  ActionsPkey = 'actions_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Actions_Delete_At_Path_Input = {
  properties: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Actions_Delete_Elem_Input = {
  properties: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Actions_Delete_Key_Input = {
  properties: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "actions" */
export type Actions_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
  resource_id: InputMaybe<Scalars['Int']>;
  user: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "actions" */
export type Actions_Insert_Input = {
  action: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['String']>;
  properties: InputMaybe<Scalars['jsonb']>;
  resource: InputMaybe<Scalars['String']>;
  resource_id: InputMaybe<Scalars['Int']>;
  user: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Actions_Max_Fields = {
  __typename?: 'actions_max_fields';
  action: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['Int']>;
  page: Maybe<Scalars['String']>;
  resource: Maybe<Scalars['String']>;
  resource_id: Maybe<Scalars['Int']>;
  user: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Actions_Min_Fields = {
  __typename?: 'actions_min_fields';
  action: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['Int']>;
  page: Maybe<Scalars['String']>;
  resource: Maybe<Scalars['String']>;
  resource_id: Maybe<Scalars['Int']>;
  user: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "actions" */
export type Actions_Mutation_Response = {
  __typename?: 'actions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Actions>;
};

/** on_conflict condition type for table "actions" */
export type Actions_On_Conflict = {
  constraint: Actions_Constraint;
  update_columns: Array<Actions_Update_Column>;
  where: InputMaybe<Actions_Bool_Exp>;
};

/** Ordering options when selecting data from "actions". */
export type Actions_Order_By = {
  action: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  page: InputMaybe<Order_By>;
  properties: InputMaybe<Order_By>;
  resource: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
  user: InputMaybe<Order_By>;
};

/** primary key columns input for table: actions */
export type Actions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Actions_Prepend_Input = {
  properties: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "actions" */
export enum Actions_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Page = 'page',
  /** column name */
  Properties = 'properties',
  /** column name */
  Resource = 'resource',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "actions" */
export type Actions_Set_Input = {
  action: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['String']>;
  properties: InputMaybe<Scalars['jsonb']>;
  resource: InputMaybe<Scalars['String']>;
  resource_id: InputMaybe<Scalars['Int']>;
  user: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Actions_Stddev_Fields = {
  __typename?: 'actions_stddev_fields';
  id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
  user: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Actions_Stddev_Pop_Fields = {
  __typename?: 'actions_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
  user: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Actions_Stddev_Samp_Fields = {
  __typename?: 'actions_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
  user: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Actions_Sum_Fields = {
  __typename?: 'actions_sum_fields';
  id: Maybe<Scalars['Int']>;
  resource_id: Maybe<Scalars['Int']>;
  user: Maybe<Scalars['Int']>;
};

/** update columns of table "actions" */
export enum Actions_Update_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Page = 'page',
  /** column name */
  Properties = 'properties',
  /** column name */
  Resource = 'resource',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  User = 'user'
}

/** aggregate var_pop on columns */
export type Actions_Var_Pop_Fields = {
  __typename?: 'actions_var_pop_fields';
  id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
  user: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Actions_Var_Samp_Fields = {
  __typename?: 'actions_var_samp_fields';
  id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
  user: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Actions_Variance_Fields = {
  __typename?: 'actions_variance_fields';
  id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
  user: Maybe<Scalars['Float']>;
};

/** Allowed email Ids */
export type Allowed_Emails = {
  __typename?: 'allowed_emails';
  created_at: Scalars['date'];
  email: Scalars['String'];
  id: Scalars['Int'];
  updated_at: Scalars['date'];
};

/** aggregated selection of "allowed_emails" */
export type Allowed_Emails_Aggregate = {
  __typename?: 'allowed_emails_aggregate';
  aggregate: Maybe<Allowed_Emails_Aggregate_Fields>;
  nodes: Array<Allowed_Emails>;
};

/** aggregate fields of "allowed_emails" */
export type Allowed_Emails_Aggregate_Fields = {
  __typename?: 'allowed_emails_aggregate_fields';
  avg: Maybe<Allowed_Emails_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Allowed_Emails_Max_Fields>;
  min: Maybe<Allowed_Emails_Min_Fields>;
  stddev: Maybe<Allowed_Emails_Stddev_Fields>;
  stddev_pop: Maybe<Allowed_Emails_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Allowed_Emails_Stddev_Samp_Fields>;
  sum: Maybe<Allowed_Emails_Sum_Fields>;
  var_pop: Maybe<Allowed_Emails_Var_Pop_Fields>;
  var_samp: Maybe<Allowed_Emails_Var_Samp_Fields>;
  variance: Maybe<Allowed_Emails_Variance_Fields>;
};


/** aggregate fields of "allowed_emails" */
export type Allowed_Emails_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Allowed_Emails_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Allowed_Emails_Avg_Fields = {
  __typename?: 'allowed_emails_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "allowed_emails". All fields are combined with a logical 'AND'. */
export type Allowed_Emails_Bool_Exp = {
  _and: InputMaybe<Array<Allowed_Emails_Bool_Exp>>;
  _not: InputMaybe<Allowed_Emails_Bool_Exp>;
  _or: InputMaybe<Array<Allowed_Emails_Bool_Exp>>;
  created_at: InputMaybe<Date_Comparison_Exp>;
  email: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  updated_at: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "allowed_emails" */
export enum Allowed_Emails_Constraint {
  /** unique or primary key constraint */
  AllowedEmailsEmailKey = 'allowed_emails_email_key',
  /** unique or primary key constraint */
  AllowedEmailsPkey = 'allowed_emails_pkey'
}

/** input type for incrementing numeric columns in table "allowed_emails" */
export type Allowed_Emails_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "allowed_emails" */
export type Allowed_Emails_Insert_Input = {
  created_at: InputMaybe<Scalars['date']>;
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  updated_at: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Allowed_Emails_Max_Fields = {
  __typename?: 'allowed_emails_max_fields';
  created_at: Maybe<Scalars['date']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['date']>;
};

/** aggregate min on columns */
export type Allowed_Emails_Min_Fields = {
  __typename?: 'allowed_emails_min_fields';
  created_at: Maybe<Scalars['date']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['date']>;
};

/** response of any mutation on the table "allowed_emails" */
export type Allowed_Emails_Mutation_Response = {
  __typename?: 'allowed_emails_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Allowed_Emails>;
};

/** on_conflict condition type for table "allowed_emails" */
export type Allowed_Emails_On_Conflict = {
  constraint: Allowed_Emails_Constraint;
  update_columns: Array<Allowed_Emails_Update_Column>;
  where: InputMaybe<Allowed_Emails_Bool_Exp>;
};

/** Ordering options when selecting data from "allowed_emails". */
export type Allowed_Emails_Order_By = {
  created_at: InputMaybe<Order_By>;
  email: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
};

/** primary key columns input for table: allowed_emails */
export type Allowed_Emails_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "allowed_emails" */
export enum Allowed_Emails_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "allowed_emails" */
export type Allowed_Emails_Set_Input = {
  created_at: InputMaybe<Scalars['date']>;
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  updated_at: InputMaybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Allowed_Emails_Stddev_Fields = {
  __typename?: 'allowed_emails_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Allowed_Emails_Stddev_Pop_Fields = {
  __typename?: 'allowed_emails_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Allowed_Emails_Stddev_Samp_Fields = {
  __typename?: 'allowed_emails_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Allowed_Emails_Sum_Fields = {
  __typename?: 'allowed_emails_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "allowed_emails" */
export enum Allowed_Emails_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Allowed_Emails_Var_Pop_Fields = {
  __typename?: 'allowed_emails_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Allowed_Emails_Var_Samp_Fields = {
  __typename?: 'allowed_emails_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Allowed_Emails_Variance_Fields = {
  __typename?: 'allowed_emails_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** columns and relationships of "application_meta" */
export type Application_Meta = {
  __typename?: 'application_meta';
  created_at: Scalars['timestamptz'];
  error: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  key: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['timestamptz'];
};

/** aggregated selection of "application_meta" */
export type Application_Meta_Aggregate = {
  __typename?: 'application_meta_aggregate';
  aggregate: Maybe<Application_Meta_Aggregate_Fields>;
  nodes: Array<Application_Meta>;
};

/** aggregate fields of "application_meta" */
export type Application_Meta_Aggregate_Fields = {
  __typename?: 'application_meta_aggregate_fields';
  avg: Maybe<Application_Meta_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Application_Meta_Max_Fields>;
  min: Maybe<Application_Meta_Min_Fields>;
  stddev: Maybe<Application_Meta_Stddev_Fields>;
  stddev_pop: Maybe<Application_Meta_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Application_Meta_Stddev_Samp_Fields>;
  sum: Maybe<Application_Meta_Sum_Fields>;
  var_pop: Maybe<Application_Meta_Var_Pop_Fields>;
  var_samp: Maybe<Application_Meta_Var_Samp_Fields>;
  variance: Maybe<Application_Meta_Variance_Fields>;
};


/** aggregate fields of "application_meta" */
export type Application_Meta_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Application_Meta_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Application_Meta_Avg_Fields = {
  __typename?: 'application_meta_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "application_meta". All fields are combined with a logical 'AND'. */
export type Application_Meta_Bool_Exp = {
  _and: InputMaybe<Array<Application_Meta_Bool_Exp>>;
  _not: InputMaybe<Application_Meta_Bool_Exp>;
  _or: InputMaybe<Array<Application_Meta_Bool_Exp>>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  error: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  key: InputMaybe<String_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
  value: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "application_meta" */
export enum Application_Meta_Constraint {
  /** unique or primary key constraint */
  ApplicationMetaPkey = 'application_meta_pkey'
}

/** input type for incrementing numeric columns in table "application_meta" */
export type Application_Meta_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "application_meta" */
export type Application_Meta_Insert_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  error: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  key: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  value: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Application_Meta_Max_Fields = {
  __typename?: 'application_meta_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  error: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  key: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  value: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Application_Meta_Min_Fields = {
  __typename?: 'application_meta_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  error: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  key: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  value: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "application_meta" */
export type Application_Meta_Mutation_Response = {
  __typename?: 'application_meta_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Application_Meta>;
};

/** on_conflict condition type for table "application_meta" */
export type Application_Meta_On_Conflict = {
  constraint: Application_Meta_Constraint;
  update_columns: Array<Application_Meta_Update_Column>;
  where: InputMaybe<Application_Meta_Bool_Exp>;
};

/** Ordering options when selecting data from "application_meta". */
export type Application_Meta_Order_By = {
  created_at: InputMaybe<Order_By>;
  error: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  key: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  value: InputMaybe<Order_By>;
};

/** primary key columns input for table: application_meta */
export type Application_Meta_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "application_meta" */
export enum Application_Meta_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Error = 'error',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "application_meta" */
export type Application_Meta_Set_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  error: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  key: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  value: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Application_Meta_Stddev_Fields = {
  __typename?: 'application_meta_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Application_Meta_Stddev_Pop_Fields = {
  __typename?: 'application_meta_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Application_Meta_Stddev_Samp_Fields = {
  __typename?: 'application_meta_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Application_Meta_Sum_Fields = {
  __typename?: 'application_meta_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "application_meta" */
export enum Application_Meta_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Error = 'error',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Application_Meta_Var_Pop_Fields = {
  __typename?: 'application_meta_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Application_Meta_Var_Samp_Fields = {
  __typename?: 'application_meta_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Application_Meta_Variance_Fields = {
  __typename?: 'application_meta_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq: InputMaybe<Scalars['bigint']>;
  _gt: InputMaybe<Scalars['bigint']>;
  _gte: InputMaybe<Scalars['bigint']>;
  _in: InputMaybe<Array<Scalars['bigint']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['bigint']>;
  _lte: InputMaybe<Scalars['bigint']>;
  _neq: InputMaybe<Scalars['bigint']>;
  _nin: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "blockchains" */
export type Blockchains = {
  __typename?: 'blockchains';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "blockchains" */
export type Blockchains_Aggregate = {
  __typename?: 'blockchains_aggregate';
  aggregate: Maybe<Blockchains_Aggregate_Fields>;
  nodes: Array<Blockchains>;
};

/** aggregate fields of "blockchains" */
export type Blockchains_Aggregate_Fields = {
  __typename?: 'blockchains_aggregate_fields';
  avg: Maybe<Blockchains_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Blockchains_Max_Fields>;
  min: Maybe<Blockchains_Min_Fields>;
  stddev: Maybe<Blockchains_Stddev_Fields>;
  stddev_pop: Maybe<Blockchains_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Blockchains_Stddev_Samp_Fields>;
  sum: Maybe<Blockchains_Sum_Fields>;
  var_pop: Maybe<Blockchains_Var_Pop_Fields>;
  var_samp: Maybe<Blockchains_Var_Samp_Fields>;
  variance: Maybe<Blockchains_Variance_Fields>;
};


/** aggregate fields of "blockchains" */
export type Blockchains_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Blockchains_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Blockchains_Avg_Fields = {
  __typename?: 'blockchains_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "blockchains". All fields are combined with a logical 'AND'. */
export type Blockchains_Bool_Exp = {
  _and: InputMaybe<Array<Blockchains_Bool_Exp>>;
  _not: InputMaybe<Blockchains_Bool_Exp>;
  _or: InputMaybe<Array<Blockchains_Bool_Exp>>;
  id: InputMaybe<Int_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "blockchains" */
export enum Blockchains_Constraint {
  /** unique or primary key constraint */
  BlockchainPkey = 'blockchain_pkey'
}

/** input type for incrementing numeric columns in table "blockchains" */
export type Blockchains_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "blockchains" */
export type Blockchains_Insert_Input = {
  id: InputMaybe<Scalars['Int']>;
  name: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Blockchains_Max_Fields = {
  __typename?: 'blockchains_max_fields';
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Blockchains_Min_Fields = {
  __typename?: 'blockchains_min_fields';
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "blockchains" */
export type Blockchains_Mutation_Response = {
  __typename?: 'blockchains_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Blockchains>;
};

/** input type for inserting object relation for remote table "blockchains" */
export type Blockchains_Obj_Rel_Insert_Input = {
  data: Blockchains_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Blockchains_On_Conflict>;
};

/** on_conflict condition type for table "blockchains" */
export type Blockchains_On_Conflict = {
  constraint: Blockchains_Constraint;
  update_columns: Array<Blockchains_Update_Column>;
  where: InputMaybe<Blockchains_Bool_Exp>;
};

/** Ordering options when selecting data from "blockchains". */
export type Blockchains_Order_By = {
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
};

/** primary key columns input for table: blockchains */
export type Blockchains_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "blockchains" */
export enum Blockchains_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "blockchains" */
export type Blockchains_Set_Input = {
  id: InputMaybe<Scalars['Int']>;
  name: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Blockchains_Stddev_Fields = {
  __typename?: 'blockchains_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Blockchains_Stddev_Pop_Fields = {
  __typename?: 'blockchains_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Blockchains_Stddev_Samp_Fields = {
  __typename?: 'blockchains_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Blockchains_Sum_Fields = {
  __typename?: 'blockchains_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "blockchains" */
export enum Blockchains_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Blockchains_Var_Pop_Fields = {
  __typename?: 'blockchains_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Blockchains_Var_Samp_Fields = {
  __typename?: 'blockchains_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Blockchains_Variance_Fields = {
  __typename?: 'blockchains_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** columns and relationships of "coins" */
export type Coins = {
  __typename?: 'coins';
  /** An object relationship */
  blockchain: Maybe<Blockchains>;
  blockchain_id: Maybe<Scalars['Int']>;
  external_id: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  ticker: Scalars['String'];
};

/** aggregated selection of "coins" */
export type Coins_Aggregate = {
  __typename?: 'coins_aggregate';
  aggregate: Maybe<Coins_Aggregate_Fields>;
  nodes: Array<Coins>;
};

/** aggregate fields of "coins" */
export type Coins_Aggregate_Fields = {
  __typename?: 'coins_aggregate_fields';
  avg: Maybe<Coins_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Coins_Max_Fields>;
  min: Maybe<Coins_Min_Fields>;
  stddev: Maybe<Coins_Stddev_Fields>;
  stddev_pop: Maybe<Coins_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Coins_Stddev_Samp_Fields>;
  sum: Maybe<Coins_Sum_Fields>;
  var_pop: Maybe<Coins_Var_Pop_Fields>;
  var_samp: Maybe<Coins_Var_Samp_Fields>;
  variance: Maybe<Coins_Variance_Fields>;
};


/** aggregate fields of "coins" */
export type Coins_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Coins_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Coins_Avg_Fields = {
  __typename?: 'coins_avg_fields';
  blockchain_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "coins". All fields are combined with a logical 'AND'. */
export type Coins_Bool_Exp = {
  _and: InputMaybe<Array<Coins_Bool_Exp>>;
  _not: InputMaybe<Coins_Bool_Exp>;
  _or: InputMaybe<Array<Coins_Bool_Exp>>;
  blockchain: InputMaybe<Blockchains_Bool_Exp>;
  blockchain_id: InputMaybe<Int_Comparison_Exp>;
  external_id: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  ticker: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "coins" */
export enum Coins_Constraint {
  /** unique or primary key constraint */
  CoinsExternalIdKey = 'coins_external_id_key',
  /** unique or primary key constraint */
  CoinsPkey = 'coins_pkey'
}

/** input type for incrementing numeric columns in table "coins" */
export type Coins_Inc_Input = {
  blockchain_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "coins" */
export type Coins_Insert_Input = {
  blockchain: InputMaybe<Blockchains_Obj_Rel_Insert_Input>;
  blockchain_id: InputMaybe<Scalars['Int']>;
  external_id: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  name: InputMaybe<Scalars['String']>;
  ticker: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Coins_Max_Fields = {
  __typename?: 'coins_max_fields';
  blockchain_id: Maybe<Scalars['Int']>;
  external_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  ticker: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Coins_Min_Fields = {
  __typename?: 'coins_min_fields';
  blockchain_id: Maybe<Scalars['Int']>;
  external_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  ticker: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "coins" */
export type Coins_Mutation_Response = {
  __typename?: 'coins_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Coins>;
};

/** input type for inserting object relation for remote table "coins" */
export type Coins_Obj_Rel_Insert_Input = {
  data: Coins_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Coins_On_Conflict>;
};

/** on_conflict condition type for table "coins" */
export type Coins_On_Conflict = {
  constraint: Coins_Constraint;
  update_columns: Array<Coins_Update_Column>;
  where: InputMaybe<Coins_Bool_Exp>;
};

/** Ordering options when selecting data from "coins". */
export type Coins_Order_By = {
  blockchain: InputMaybe<Blockchains_Order_By>;
  blockchain_id: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  ticker: InputMaybe<Order_By>;
};

/** primary key columns input for table: coins */
export type Coins_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "coins" */
export enum Coins_Select_Column {
  /** column name */
  BlockchainId = 'blockchain_id',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Ticker = 'ticker'
}

/** input type for updating data in table "coins" */
export type Coins_Set_Input = {
  blockchain_id: InputMaybe<Scalars['Int']>;
  external_id: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  name: InputMaybe<Scalars['String']>;
  ticker: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Coins_Stddev_Fields = {
  __typename?: 'coins_stddev_fields';
  blockchain_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Coins_Stddev_Pop_Fields = {
  __typename?: 'coins_stddev_pop_fields';
  blockchain_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Coins_Stddev_Samp_Fields = {
  __typename?: 'coins_stddev_samp_fields';
  blockchain_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Coins_Sum_Fields = {
  __typename?: 'coins_sum_fields';
  blockchain_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "coins" */
export enum Coins_Update_Column {
  /** column name */
  BlockchainId = 'blockchain_id',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Ticker = 'ticker'
}

/** aggregate var_pop on columns */
export type Coins_Var_Pop_Fields = {
  __typename?: 'coins_var_pop_fields';
  blockchain_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Coins_Var_Samp_Fields = {
  __typename?: 'coins_var_samp_fields';
  blockchain_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Coins_Variance_Fields = {
  __typename?: 'coins_variance_fields';
  blockchain_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** columns and relationships of "companies" */
export type Companies = {
  __typename?: 'companies';
  aliases: Maybe<Scalars['String']>;
  audit_file: Maybe<Scalars['String']>;
  careers_page: Maybe<Scalars['String']>;
  /** An object relationship */
  coin: Maybe<Coins>;
  coin_id: Maybe<Scalars['Int']>;
  company_linkedin: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  date_added: Maybe<Scalars['date']>;
  discord: Maybe<Scalars['String']>;
  external_id: Maybe<Scalars['String']>;
  /** An array relationship */
  follows: Array<Follows_Companies>;
  /** An aggregate relationship */
  follows_aggregate: Follows_Companies_Aggregate;
  github: Maybe<Scalars['String']>;
  glassdoor: Maybe<Scalars['String']>;
  ico_end: Maybe<Scalars['date']>;
  ico_start: Maybe<Scalars['date']>;
  id: Scalars['Int'];
  /** An array relationship */
  investment_rounds: Array<Investment_Rounds>;
  /** An aggregate relationship */
  investment_rounds_aggregate: Investment_Rounds_Aggregate;
  investor_amount: Maybe<Scalars['bigint']>;
  layer: Maybe<Scalars['String']>;
  layer_detail: Maybe<Scalars['String']>;
  location: Maybe<Scalars['String']>;
  logo: Maybe<Scalars['jsonb']>;
  market_verified: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  notes: Maybe<Scalars['String']>;
  overview: Maybe<Scalars['String']>;
  sentiment: Maybe<Scalars['jsonb']>;
  slug: Maybe<Scalars['String']>;
  status: Scalars['String'];
  tags: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  teamMembers: Array<Team_Members>;
  /** An aggregate relationship */
  teamMembers_aggregate: Team_Members_Aggregate;
  total_employees: Maybe<Scalars['numeric']>;
  total_valuation: Maybe<Scalars['String']>;
  twitter: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  velocity_linkedin: Maybe<Scalars['String']>;
  velocity_token: Maybe<Scalars['String']>;
  website: Maybe<Scalars['String']>;
  white_paper: Maybe<Scalars['String']>;
  year_founded: Maybe<Scalars['String']>;
};


/** columns and relationships of "companies" */
export type CompaniesFollowsArgs = {
  distinct_on: InputMaybe<Array<Follows_Companies_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Companies_Order_By>>;
  where: InputMaybe<Follows_Companies_Bool_Exp>;
};


/** columns and relationships of "companies" */
export type CompaniesFollows_AggregateArgs = {
  distinct_on: InputMaybe<Array<Follows_Companies_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Companies_Order_By>>;
  where: InputMaybe<Follows_Companies_Bool_Exp>;
};


/** columns and relationships of "companies" */
export type CompaniesInvestment_RoundsArgs = {
  distinct_on: InputMaybe<Array<Investment_Rounds_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investment_Rounds_Order_By>>;
  where: InputMaybe<Investment_Rounds_Bool_Exp>;
};


/** columns and relationships of "companies" */
export type CompaniesInvestment_Rounds_AggregateArgs = {
  distinct_on: InputMaybe<Array<Investment_Rounds_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investment_Rounds_Order_By>>;
  where: InputMaybe<Investment_Rounds_Bool_Exp>;
};


/** columns and relationships of "companies" */
export type CompaniesLogoArgs = {
  path: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "companies" */
export type CompaniesSentimentArgs = {
  path: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "companies" */
export type CompaniesTagsArgs = {
  path: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "companies" */
export type CompaniesTeamMembersArgs = {
  distinct_on: InputMaybe<Array<Team_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Team_Members_Order_By>>;
  where: InputMaybe<Team_Members_Bool_Exp>;
};


/** columns and relationships of "companies" */
export type CompaniesTeamMembers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Team_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Team_Members_Order_By>>;
  where: InputMaybe<Team_Members_Bool_Exp>;
};

/** aggregated selection of "companies" */
export type Companies_Aggregate = {
  __typename?: 'companies_aggregate';
  aggregate: Maybe<Companies_Aggregate_Fields>;
  nodes: Array<Companies>;
};

/** aggregate fields of "companies" */
export type Companies_Aggregate_Fields = {
  __typename?: 'companies_aggregate_fields';
  avg: Maybe<Companies_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Companies_Max_Fields>;
  min: Maybe<Companies_Min_Fields>;
  stddev: Maybe<Companies_Stddev_Fields>;
  stddev_pop: Maybe<Companies_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Companies_Stddev_Samp_Fields>;
  sum: Maybe<Companies_Sum_Fields>;
  var_pop: Maybe<Companies_Var_Pop_Fields>;
  var_samp: Maybe<Companies_Var_Samp_Fields>;
  variance: Maybe<Companies_Variance_Fields>;
};


/** aggregate fields of "companies" */
export type Companies_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Companies_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Companies_Append_Input = {
  logo: InputMaybe<Scalars['jsonb']>;
  sentiment: InputMaybe<Scalars['jsonb']>;
  tags: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Companies_Avg_Fields = {
  __typename?: 'companies_avg_fields';
  coin_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  investor_amount: Maybe<Scalars['Float']>;
  total_employees: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
export type Companies_Bool_Exp = {
  _and: InputMaybe<Array<Companies_Bool_Exp>>;
  _not: InputMaybe<Companies_Bool_Exp>;
  _or: InputMaybe<Array<Companies_Bool_Exp>>;
  aliases: InputMaybe<String_Comparison_Exp>;
  audit_file: InputMaybe<String_Comparison_Exp>;
  careers_page: InputMaybe<String_Comparison_Exp>;
  coin: InputMaybe<Coins_Bool_Exp>;
  coin_id: InputMaybe<Int_Comparison_Exp>;
  company_linkedin: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  date_added: InputMaybe<Date_Comparison_Exp>;
  discord: InputMaybe<String_Comparison_Exp>;
  external_id: InputMaybe<String_Comparison_Exp>;
  follows: InputMaybe<Follows_Companies_Bool_Exp>;
  github: InputMaybe<String_Comparison_Exp>;
  glassdoor: InputMaybe<String_Comparison_Exp>;
  ico_end: InputMaybe<Date_Comparison_Exp>;
  ico_start: InputMaybe<Date_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  investment_rounds: InputMaybe<Investment_Rounds_Bool_Exp>;
  investor_amount: InputMaybe<Bigint_Comparison_Exp>;
  layer: InputMaybe<String_Comparison_Exp>;
  layer_detail: InputMaybe<String_Comparison_Exp>;
  location: InputMaybe<String_Comparison_Exp>;
  logo: InputMaybe<Jsonb_Comparison_Exp>;
  market_verified: InputMaybe<String_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  notes: InputMaybe<String_Comparison_Exp>;
  overview: InputMaybe<String_Comparison_Exp>;
  sentiment: InputMaybe<Jsonb_Comparison_Exp>;
  slug: InputMaybe<String_Comparison_Exp>;
  status: InputMaybe<String_Comparison_Exp>;
  tags: InputMaybe<Jsonb_Comparison_Exp>;
  teamMembers: InputMaybe<Team_Members_Bool_Exp>;
  total_employees: InputMaybe<Numeric_Comparison_Exp>;
  total_valuation: InputMaybe<String_Comparison_Exp>;
  twitter: InputMaybe<String_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
  velocity_linkedin: InputMaybe<String_Comparison_Exp>;
  velocity_token: InputMaybe<String_Comparison_Exp>;
  website: InputMaybe<String_Comparison_Exp>;
  white_paper: InputMaybe<String_Comparison_Exp>;
  year_founded: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "companies" */
export enum Companies_Constraint {
  /** unique or primary key constraint */
  CompaniesExternalIdKey = 'companies_external_id_key',
  /** unique or primary key constraint */
  CompaniesPkey = 'companies_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Companies_Delete_At_Path_Input = {
  logo: InputMaybe<Array<Scalars['String']>>;
  sentiment: InputMaybe<Array<Scalars['String']>>;
  tags: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Companies_Delete_Elem_Input = {
  logo: InputMaybe<Scalars['Int']>;
  sentiment: InputMaybe<Scalars['Int']>;
  tags: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Companies_Delete_Key_Input = {
  logo: InputMaybe<Scalars['String']>;
  sentiment: InputMaybe<Scalars['String']>;
  tags: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "companies" */
export type Companies_Inc_Input = {
  coin_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
  investor_amount: InputMaybe<Scalars['bigint']>;
  total_employees: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "companies" */
export type Companies_Insert_Input = {
  aliases: InputMaybe<Scalars['String']>;
  audit_file: InputMaybe<Scalars['String']>;
  careers_page: InputMaybe<Scalars['String']>;
  coin: InputMaybe<Coins_Obj_Rel_Insert_Input>;
  coin_id: InputMaybe<Scalars['Int']>;
  company_linkedin: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  date_added: InputMaybe<Scalars['date']>;
  discord: InputMaybe<Scalars['String']>;
  external_id: InputMaybe<Scalars['String']>;
  follows: InputMaybe<Follows_Companies_Arr_Rel_Insert_Input>;
  github: InputMaybe<Scalars['String']>;
  glassdoor: InputMaybe<Scalars['String']>;
  ico_end: InputMaybe<Scalars['date']>;
  ico_start: InputMaybe<Scalars['date']>;
  id: InputMaybe<Scalars['Int']>;
  investment_rounds: InputMaybe<Investment_Rounds_Arr_Rel_Insert_Input>;
  investor_amount: InputMaybe<Scalars['bigint']>;
  layer: InputMaybe<Scalars['String']>;
  layer_detail: InputMaybe<Scalars['String']>;
  location: InputMaybe<Scalars['String']>;
  logo: InputMaybe<Scalars['jsonb']>;
  market_verified: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  notes: InputMaybe<Scalars['String']>;
  overview: InputMaybe<Scalars['String']>;
  sentiment: InputMaybe<Scalars['jsonb']>;
  slug: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
  tags: InputMaybe<Scalars['jsonb']>;
  teamMembers: InputMaybe<Team_Members_Arr_Rel_Insert_Input>;
  total_employees: InputMaybe<Scalars['numeric']>;
  total_valuation: InputMaybe<Scalars['String']>;
  twitter: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  velocity_linkedin: InputMaybe<Scalars['String']>;
  velocity_token: InputMaybe<Scalars['String']>;
  website: InputMaybe<Scalars['String']>;
  white_paper: InputMaybe<Scalars['String']>;
  year_founded: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Companies_Max_Fields = {
  __typename?: 'companies_max_fields';
  aliases: Maybe<Scalars['String']>;
  audit_file: Maybe<Scalars['String']>;
  careers_page: Maybe<Scalars['String']>;
  coin_id: Maybe<Scalars['Int']>;
  company_linkedin: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  date_added: Maybe<Scalars['date']>;
  discord: Maybe<Scalars['String']>;
  external_id: Maybe<Scalars['String']>;
  github: Maybe<Scalars['String']>;
  glassdoor: Maybe<Scalars['String']>;
  ico_end: Maybe<Scalars['date']>;
  ico_start: Maybe<Scalars['date']>;
  id: Maybe<Scalars['Int']>;
  investor_amount: Maybe<Scalars['bigint']>;
  layer: Maybe<Scalars['String']>;
  layer_detail: Maybe<Scalars['String']>;
  location: Maybe<Scalars['String']>;
  market_verified: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  notes: Maybe<Scalars['String']>;
  overview: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  total_employees: Maybe<Scalars['numeric']>;
  total_valuation: Maybe<Scalars['String']>;
  twitter: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  velocity_linkedin: Maybe<Scalars['String']>;
  velocity_token: Maybe<Scalars['String']>;
  website: Maybe<Scalars['String']>;
  white_paper: Maybe<Scalars['String']>;
  year_founded: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Companies_Min_Fields = {
  __typename?: 'companies_min_fields';
  aliases: Maybe<Scalars['String']>;
  audit_file: Maybe<Scalars['String']>;
  careers_page: Maybe<Scalars['String']>;
  coin_id: Maybe<Scalars['Int']>;
  company_linkedin: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  date_added: Maybe<Scalars['date']>;
  discord: Maybe<Scalars['String']>;
  external_id: Maybe<Scalars['String']>;
  github: Maybe<Scalars['String']>;
  glassdoor: Maybe<Scalars['String']>;
  ico_end: Maybe<Scalars['date']>;
  ico_start: Maybe<Scalars['date']>;
  id: Maybe<Scalars['Int']>;
  investor_amount: Maybe<Scalars['bigint']>;
  layer: Maybe<Scalars['String']>;
  layer_detail: Maybe<Scalars['String']>;
  location: Maybe<Scalars['String']>;
  market_verified: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  notes: Maybe<Scalars['String']>;
  overview: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  total_employees: Maybe<Scalars['numeric']>;
  total_valuation: Maybe<Scalars['String']>;
  twitter: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  velocity_linkedin: Maybe<Scalars['String']>;
  velocity_token: Maybe<Scalars['String']>;
  website: Maybe<Scalars['String']>;
  white_paper: Maybe<Scalars['String']>;
  year_founded: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "companies" */
export type Companies_Mutation_Response = {
  __typename?: 'companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Companies>;
};

/** input type for inserting object relation for remote table "companies" */
export type Companies_Obj_Rel_Insert_Input = {
  data: Companies_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Companies_On_Conflict>;
};

/** on_conflict condition type for table "companies" */
export type Companies_On_Conflict = {
  constraint: Companies_Constraint;
  update_columns: Array<Companies_Update_Column>;
  where: InputMaybe<Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "companies". */
export type Companies_Order_By = {
  aliases: InputMaybe<Order_By>;
  audit_file: InputMaybe<Order_By>;
  careers_page: InputMaybe<Order_By>;
  coin: InputMaybe<Coins_Order_By>;
  coin_id: InputMaybe<Order_By>;
  company_linkedin: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  date_added: InputMaybe<Order_By>;
  discord: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  follows_aggregate: InputMaybe<Follows_Companies_Aggregate_Order_By>;
  github: InputMaybe<Order_By>;
  glassdoor: InputMaybe<Order_By>;
  ico_end: InputMaybe<Order_By>;
  ico_start: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  investment_rounds_aggregate: InputMaybe<Investment_Rounds_Aggregate_Order_By>;
  investor_amount: InputMaybe<Order_By>;
  layer: InputMaybe<Order_By>;
  layer_detail: InputMaybe<Order_By>;
  location: InputMaybe<Order_By>;
  logo: InputMaybe<Order_By>;
  market_verified: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  notes: InputMaybe<Order_By>;
  overview: InputMaybe<Order_By>;
  sentiment: InputMaybe<Order_By>;
  slug: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  tags: InputMaybe<Order_By>;
  teamMembers_aggregate: InputMaybe<Team_Members_Aggregate_Order_By>;
  total_employees: InputMaybe<Order_By>;
  total_valuation: InputMaybe<Order_By>;
  twitter: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  velocity_linkedin: InputMaybe<Order_By>;
  velocity_token: InputMaybe<Order_By>;
  website: InputMaybe<Order_By>;
  white_paper: InputMaybe<Order_By>;
  year_founded: InputMaybe<Order_By>;
};

/** primary key columns input for table: companies */
export type Companies_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Companies_Prepend_Input = {
  logo: InputMaybe<Scalars['jsonb']>;
  sentiment: InputMaybe<Scalars['jsonb']>;
  tags: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "companies" */
export enum Companies_Select_Column {
  /** column name */
  Aliases = 'aliases',
  /** column name */
  AuditFile = 'audit_file',
  /** column name */
  CareersPage = 'careers_page',
  /** column name */
  CoinId = 'coin_id',
  /** column name */
  CompanyLinkedin = 'company_linkedin',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateAdded = 'date_added',
  /** column name */
  Discord = 'discord',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Github = 'github',
  /** column name */
  Glassdoor = 'glassdoor',
  /** column name */
  IcoEnd = 'ico_end',
  /** column name */
  IcoStart = 'ico_start',
  /** column name */
  Id = 'id',
  /** column name */
  InvestorAmount = 'investor_amount',
  /** column name */
  Layer = 'layer',
  /** column name */
  LayerDetail = 'layer_detail',
  /** column name */
  Location = 'location',
  /** column name */
  Logo = 'logo',
  /** column name */
  MarketVerified = 'market_verified',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes',
  /** column name */
  Overview = 'overview',
  /** column name */
  Sentiment = 'sentiment',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  TotalEmployees = 'total_employees',
  /** column name */
  TotalValuation = 'total_valuation',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VelocityLinkedin = 'velocity_linkedin',
  /** column name */
  VelocityToken = 'velocity_token',
  /** column name */
  Website = 'website',
  /** column name */
  WhitePaper = 'white_paper',
  /** column name */
  YearFounded = 'year_founded'
}

/** input type for updating data in table "companies" */
export type Companies_Set_Input = {
  aliases: InputMaybe<Scalars['String']>;
  audit_file: InputMaybe<Scalars['String']>;
  careers_page: InputMaybe<Scalars['String']>;
  coin_id: InputMaybe<Scalars['Int']>;
  company_linkedin: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  date_added: InputMaybe<Scalars['date']>;
  discord: InputMaybe<Scalars['String']>;
  external_id: InputMaybe<Scalars['String']>;
  github: InputMaybe<Scalars['String']>;
  glassdoor: InputMaybe<Scalars['String']>;
  ico_end: InputMaybe<Scalars['date']>;
  ico_start: InputMaybe<Scalars['date']>;
  id: InputMaybe<Scalars['Int']>;
  investor_amount: InputMaybe<Scalars['bigint']>;
  layer: InputMaybe<Scalars['String']>;
  layer_detail: InputMaybe<Scalars['String']>;
  location: InputMaybe<Scalars['String']>;
  logo: InputMaybe<Scalars['jsonb']>;
  market_verified: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  notes: InputMaybe<Scalars['String']>;
  overview: InputMaybe<Scalars['String']>;
  sentiment: InputMaybe<Scalars['jsonb']>;
  slug: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
  tags: InputMaybe<Scalars['jsonb']>;
  total_employees: InputMaybe<Scalars['numeric']>;
  total_valuation: InputMaybe<Scalars['String']>;
  twitter: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  velocity_linkedin: InputMaybe<Scalars['String']>;
  velocity_token: InputMaybe<Scalars['String']>;
  website: InputMaybe<Scalars['String']>;
  white_paper: InputMaybe<Scalars['String']>;
  year_founded: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Companies_Stddev_Fields = {
  __typename?: 'companies_stddev_fields';
  coin_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  investor_amount: Maybe<Scalars['Float']>;
  total_employees: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Companies_Stddev_Pop_Fields = {
  __typename?: 'companies_stddev_pop_fields';
  coin_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  investor_amount: Maybe<Scalars['Float']>;
  total_employees: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Companies_Stddev_Samp_Fields = {
  __typename?: 'companies_stddev_samp_fields';
  coin_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  investor_amount: Maybe<Scalars['Float']>;
  total_employees: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Companies_Sum_Fields = {
  __typename?: 'companies_sum_fields';
  coin_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  investor_amount: Maybe<Scalars['bigint']>;
  total_employees: Maybe<Scalars['numeric']>;
};

/** update columns of table "companies" */
export enum Companies_Update_Column {
  /** column name */
  Aliases = 'aliases',
  /** column name */
  AuditFile = 'audit_file',
  /** column name */
  CareersPage = 'careers_page',
  /** column name */
  CoinId = 'coin_id',
  /** column name */
  CompanyLinkedin = 'company_linkedin',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateAdded = 'date_added',
  /** column name */
  Discord = 'discord',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Github = 'github',
  /** column name */
  Glassdoor = 'glassdoor',
  /** column name */
  IcoEnd = 'ico_end',
  /** column name */
  IcoStart = 'ico_start',
  /** column name */
  Id = 'id',
  /** column name */
  InvestorAmount = 'investor_amount',
  /** column name */
  Layer = 'layer',
  /** column name */
  LayerDetail = 'layer_detail',
  /** column name */
  Location = 'location',
  /** column name */
  Logo = 'logo',
  /** column name */
  MarketVerified = 'market_verified',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes',
  /** column name */
  Overview = 'overview',
  /** column name */
  Sentiment = 'sentiment',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  TotalEmployees = 'total_employees',
  /** column name */
  TotalValuation = 'total_valuation',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VelocityLinkedin = 'velocity_linkedin',
  /** column name */
  VelocityToken = 'velocity_token',
  /** column name */
  Website = 'website',
  /** column name */
  WhitePaper = 'white_paper',
  /** column name */
  YearFounded = 'year_founded'
}

/** aggregate var_pop on columns */
export type Companies_Var_Pop_Fields = {
  __typename?: 'companies_var_pop_fields';
  coin_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  investor_amount: Maybe<Scalars['Float']>;
  total_employees: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Companies_Var_Samp_Fields = {
  __typename?: 'companies_var_samp_fields';
  coin_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  investor_amount: Maybe<Scalars['Float']>;
  total_employees: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Companies_Variance_Fields = {
  __typename?: 'companies_variance_fields';
  coin_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  investor_amount: Maybe<Scalars['Float']>;
  total_employees: Maybe<Scalars['Float']>;
};

/** columns and relationships of "data_actions" */
export type Data_Actions = {
  __typename?: 'data_actions';
  name: Scalars['String'];
  owner_value: Scalars['Int'];
  partner_value: Scalars['Int'];
  user_value: Scalars['Int'];
};

/** aggregated selection of "data_actions" */
export type Data_Actions_Aggregate = {
  __typename?: 'data_actions_aggregate';
  aggregate: Maybe<Data_Actions_Aggregate_Fields>;
  nodes: Array<Data_Actions>;
};

/** aggregate fields of "data_actions" */
export type Data_Actions_Aggregate_Fields = {
  __typename?: 'data_actions_aggregate_fields';
  avg: Maybe<Data_Actions_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Data_Actions_Max_Fields>;
  min: Maybe<Data_Actions_Min_Fields>;
  stddev: Maybe<Data_Actions_Stddev_Fields>;
  stddev_pop: Maybe<Data_Actions_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Data_Actions_Stddev_Samp_Fields>;
  sum: Maybe<Data_Actions_Sum_Fields>;
  var_pop: Maybe<Data_Actions_Var_Pop_Fields>;
  var_samp: Maybe<Data_Actions_Var_Samp_Fields>;
  variance: Maybe<Data_Actions_Variance_Fields>;
};


/** aggregate fields of "data_actions" */
export type Data_Actions_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Data_Actions_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Data_Actions_Avg_Fields = {
  __typename?: 'data_actions_avg_fields';
  owner_value: Maybe<Scalars['Float']>;
  partner_value: Maybe<Scalars['Float']>;
  user_value: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "data_actions". All fields are combined with a logical 'AND'. */
export type Data_Actions_Bool_Exp = {
  _and: InputMaybe<Array<Data_Actions_Bool_Exp>>;
  _not: InputMaybe<Data_Actions_Bool_Exp>;
  _or: InputMaybe<Array<Data_Actions_Bool_Exp>>;
  name: InputMaybe<String_Comparison_Exp>;
  owner_value: InputMaybe<Int_Comparison_Exp>;
  partner_value: InputMaybe<Int_Comparison_Exp>;
  user_value: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "data_actions" */
export enum Data_Actions_Constraint {
  /** unique or primary key constraint */
  DataActionsPkey = 'data_actions_pkey'
}

/** input type for incrementing numeric columns in table "data_actions" */
export type Data_Actions_Inc_Input = {
  owner_value: InputMaybe<Scalars['Int']>;
  partner_value: InputMaybe<Scalars['Int']>;
  user_value: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "data_actions" */
export type Data_Actions_Insert_Input = {
  name: InputMaybe<Scalars['String']>;
  owner_value: InputMaybe<Scalars['Int']>;
  partner_value: InputMaybe<Scalars['Int']>;
  user_value: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Data_Actions_Max_Fields = {
  __typename?: 'data_actions_max_fields';
  name: Maybe<Scalars['String']>;
  owner_value: Maybe<Scalars['Int']>;
  partner_value: Maybe<Scalars['Int']>;
  user_value: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Data_Actions_Min_Fields = {
  __typename?: 'data_actions_min_fields';
  name: Maybe<Scalars['String']>;
  owner_value: Maybe<Scalars['Int']>;
  partner_value: Maybe<Scalars['Int']>;
  user_value: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "data_actions" */
export type Data_Actions_Mutation_Response = {
  __typename?: 'data_actions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Data_Actions>;
};

/** on_conflict condition type for table "data_actions" */
export type Data_Actions_On_Conflict = {
  constraint: Data_Actions_Constraint;
  update_columns: Array<Data_Actions_Update_Column>;
  where: InputMaybe<Data_Actions_Bool_Exp>;
};

/** Ordering options when selecting data from "data_actions". */
export type Data_Actions_Order_By = {
  name: InputMaybe<Order_By>;
  owner_value: InputMaybe<Order_By>;
  partner_value: InputMaybe<Order_By>;
  user_value: InputMaybe<Order_By>;
};

/** primary key columns input for table: data_actions */
export type Data_Actions_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "data_actions" */
export enum Data_Actions_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  OwnerValue = 'owner_value',
  /** column name */
  PartnerValue = 'partner_value',
  /** column name */
  UserValue = 'user_value'
}

/** input type for updating data in table "data_actions" */
export type Data_Actions_Set_Input = {
  name: InputMaybe<Scalars['String']>;
  owner_value: InputMaybe<Scalars['Int']>;
  partner_value: InputMaybe<Scalars['Int']>;
  user_value: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Data_Actions_Stddev_Fields = {
  __typename?: 'data_actions_stddev_fields';
  owner_value: Maybe<Scalars['Float']>;
  partner_value: Maybe<Scalars['Float']>;
  user_value: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Data_Actions_Stddev_Pop_Fields = {
  __typename?: 'data_actions_stddev_pop_fields';
  owner_value: Maybe<Scalars['Float']>;
  partner_value: Maybe<Scalars['Float']>;
  user_value: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Data_Actions_Stddev_Samp_Fields = {
  __typename?: 'data_actions_stddev_samp_fields';
  owner_value: Maybe<Scalars['Float']>;
  partner_value: Maybe<Scalars['Float']>;
  user_value: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Data_Actions_Sum_Fields = {
  __typename?: 'data_actions_sum_fields';
  owner_value: Maybe<Scalars['Int']>;
  partner_value: Maybe<Scalars['Int']>;
  user_value: Maybe<Scalars['Int']>;
};

/** update columns of table "data_actions" */
export enum Data_Actions_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  OwnerValue = 'owner_value',
  /** column name */
  PartnerValue = 'partner_value',
  /** column name */
  UserValue = 'user_value'
}

/** aggregate var_pop on columns */
export type Data_Actions_Var_Pop_Fields = {
  __typename?: 'data_actions_var_pop_fields';
  owner_value: Maybe<Scalars['Float']>;
  partner_value: Maybe<Scalars['Float']>;
  user_value: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Data_Actions_Var_Samp_Fields = {
  __typename?: 'data_actions_var_samp_fields';
  owner_value: Maybe<Scalars['Float']>;
  partner_value: Maybe<Scalars['Float']>;
  user_value: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Data_Actions_Variance_Fields = {
  __typename?: 'data_actions_variance_fields';
  owner_value: Maybe<Scalars['Float']>;
  partner_value: Maybe<Scalars['Float']>;
  user_value: Maybe<Scalars['Float']>;
};

/** columns and relationships of "data_fields" */
export type Data_Fields = {
  __typename?: 'data_fields';
  description: Maybe<Scalars['String']>;
  name: Scalars['String'];
  path: Scalars['String'];
  regex_test: Maybe<Scalars['String']>;
  regex_transform: Maybe<Scalars['String']>;
  resource: Scalars['String'];
  weight: Scalars['Int'];
};

/** aggregated selection of "data_fields" */
export type Data_Fields_Aggregate = {
  __typename?: 'data_fields_aggregate';
  aggregate: Maybe<Data_Fields_Aggregate_Fields>;
  nodes: Array<Data_Fields>;
};

/** aggregate fields of "data_fields" */
export type Data_Fields_Aggregate_Fields = {
  __typename?: 'data_fields_aggregate_fields';
  avg: Maybe<Data_Fields_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Data_Fields_Max_Fields>;
  min: Maybe<Data_Fields_Min_Fields>;
  stddev: Maybe<Data_Fields_Stddev_Fields>;
  stddev_pop: Maybe<Data_Fields_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Data_Fields_Stddev_Samp_Fields>;
  sum: Maybe<Data_Fields_Sum_Fields>;
  var_pop: Maybe<Data_Fields_Var_Pop_Fields>;
  var_samp: Maybe<Data_Fields_Var_Samp_Fields>;
  variance: Maybe<Data_Fields_Variance_Fields>;
};


/** aggregate fields of "data_fields" */
export type Data_Fields_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Data_Fields_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Data_Fields_Avg_Fields = {
  __typename?: 'data_fields_avg_fields';
  weight: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "data_fields". All fields are combined with a logical 'AND'. */
export type Data_Fields_Bool_Exp = {
  _and: InputMaybe<Array<Data_Fields_Bool_Exp>>;
  _not: InputMaybe<Data_Fields_Bool_Exp>;
  _or: InputMaybe<Array<Data_Fields_Bool_Exp>>;
  description: InputMaybe<String_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  path: InputMaybe<String_Comparison_Exp>;
  regex_test: InputMaybe<String_Comparison_Exp>;
  regex_transform: InputMaybe<String_Comparison_Exp>;
  resource: InputMaybe<String_Comparison_Exp>;
  weight: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "data_fields" */
export enum Data_Fields_Constraint {
  /** unique or primary key constraint */
  DataFieldsPkey = 'data_fields_pkey'
}

/** input type for incrementing numeric columns in table "data_fields" */
export type Data_Fields_Inc_Input = {
  weight: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "data_fields" */
export type Data_Fields_Insert_Input = {
  description: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  path: InputMaybe<Scalars['String']>;
  regex_test: InputMaybe<Scalars['String']>;
  regex_transform: InputMaybe<Scalars['String']>;
  resource: InputMaybe<Scalars['String']>;
  weight: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Data_Fields_Max_Fields = {
  __typename?: 'data_fields_max_fields';
  description: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  regex_test: Maybe<Scalars['String']>;
  regex_transform: Maybe<Scalars['String']>;
  resource: Maybe<Scalars['String']>;
  weight: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Data_Fields_Min_Fields = {
  __typename?: 'data_fields_min_fields';
  description: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  regex_test: Maybe<Scalars['String']>;
  regex_transform: Maybe<Scalars['String']>;
  resource: Maybe<Scalars['String']>;
  weight: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "data_fields" */
export type Data_Fields_Mutation_Response = {
  __typename?: 'data_fields_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Data_Fields>;
};

/** on_conflict condition type for table "data_fields" */
export type Data_Fields_On_Conflict = {
  constraint: Data_Fields_Constraint;
  update_columns: Array<Data_Fields_Update_Column>;
  where: InputMaybe<Data_Fields_Bool_Exp>;
};

/** Ordering options when selecting data from "data_fields". */
export type Data_Fields_Order_By = {
  description: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  path: InputMaybe<Order_By>;
  regex_test: InputMaybe<Order_By>;
  regex_transform: InputMaybe<Order_By>;
  resource: InputMaybe<Order_By>;
  weight: InputMaybe<Order_By>;
};

/** primary key columns input for table: data_fields */
export type Data_Fields_Pk_Columns_Input = {
  path: Scalars['String'];
};

/** select columns of table "data_fields" */
export enum Data_Fields_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  Path = 'path',
  /** column name */
  RegexTest = 'regex_test',
  /** column name */
  RegexTransform = 'regex_transform',
  /** column name */
  Resource = 'resource',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "data_fields" */
export type Data_Fields_Set_Input = {
  description: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  path: InputMaybe<Scalars['String']>;
  regex_test: InputMaybe<Scalars['String']>;
  regex_transform: InputMaybe<Scalars['String']>;
  resource: InputMaybe<Scalars['String']>;
  weight: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Data_Fields_Stddev_Fields = {
  __typename?: 'data_fields_stddev_fields';
  weight: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Data_Fields_Stddev_Pop_Fields = {
  __typename?: 'data_fields_stddev_pop_fields';
  weight: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Data_Fields_Stddev_Samp_Fields = {
  __typename?: 'data_fields_stddev_samp_fields';
  weight: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Data_Fields_Sum_Fields = {
  __typename?: 'data_fields_sum_fields';
  weight: Maybe<Scalars['Int']>;
};

/** update columns of table "data_fields" */
export enum Data_Fields_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  Path = 'path',
  /** column name */
  RegexTest = 'regex_test',
  /** column name */
  RegexTransform = 'regex_transform',
  /** column name */
  Resource = 'resource',
  /** column name */
  Weight = 'weight'
}

/** aggregate var_pop on columns */
export type Data_Fields_Var_Pop_Fields = {
  __typename?: 'data_fields_var_pop_fields';
  weight: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Data_Fields_Var_Samp_Fields = {
  __typename?: 'data_fields_var_samp_fields';
  weight: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Data_Fields_Variance_Fields = {
  __typename?: 'data_fields_variance_fields';
  weight: Maybe<Scalars['Float']>;
};

/** columns and relationships of "data_partners" */
export type Data_Partners = {
  __typename?: 'data_partners';
  api_key: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "data_partners" */
export type Data_Partners_Aggregate = {
  __typename?: 'data_partners_aggregate';
  aggregate: Maybe<Data_Partners_Aggregate_Fields>;
  nodes: Array<Data_Partners>;
};

/** aggregate fields of "data_partners" */
export type Data_Partners_Aggregate_Fields = {
  __typename?: 'data_partners_aggregate_fields';
  avg: Maybe<Data_Partners_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Data_Partners_Max_Fields>;
  min: Maybe<Data_Partners_Min_Fields>;
  stddev: Maybe<Data_Partners_Stddev_Fields>;
  stddev_pop: Maybe<Data_Partners_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Data_Partners_Stddev_Samp_Fields>;
  sum: Maybe<Data_Partners_Sum_Fields>;
  var_pop: Maybe<Data_Partners_Var_Pop_Fields>;
  var_samp: Maybe<Data_Partners_Var_Samp_Fields>;
  variance: Maybe<Data_Partners_Variance_Fields>;
};


/** aggregate fields of "data_partners" */
export type Data_Partners_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Data_Partners_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Data_Partners_Avg_Fields = {
  __typename?: 'data_partners_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "data_partners". All fields are combined with a logical 'AND'. */
export type Data_Partners_Bool_Exp = {
  _and: InputMaybe<Array<Data_Partners_Bool_Exp>>;
  _not: InputMaybe<Data_Partners_Bool_Exp>;
  _or: InputMaybe<Array<Data_Partners_Bool_Exp>>;
  api_key: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "data_partners" */
export enum Data_Partners_Constraint {
  /** unique or primary key constraint */
  DataPartnersPkey = 'data_partners_pkey'
}

/** input type for incrementing numeric columns in table "data_partners" */
export type Data_Partners_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "data_partners" */
export type Data_Partners_Insert_Input = {
  api_key: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  name: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Data_Partners_Max_Fields = {
  __typename?: 'data_partners_max_fields';
  api_key: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Data_Partners_Min_Fields = {
  __typename?: 'data_partners_min_fields';
  api_key: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "data_partners" */
export type Data_Partners_Mutation_Response = {
  __typename?: 'data_partners_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Data_Partners>;
};

/** on_conflict condition type for table "data_partners" */
export type Data_Partners_On_Conflict = {
  constraint: Data_Partners_Constraint;
  update_columns: Array<Data_Partners_Update_Column>;
  where: InputMaybe<Data_Partners_Bool_Exp>;
};

/** Ordering options when selecting data from "data_partners". */
export type Data_Partners_Order_By = {
  api_key: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
};

/** primary key columns input for table: data_partners */
export type Data_Partners_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "data_partners" */
export enum Data_Partners_Select_Column {
  /** column name */
  ApiKey = 'api_key',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "data_partners" */
export type Data_Partners_Set_Input = {
  api_key: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  name: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Data_Partners_Stddev_Fields = {
  __typename?: 'data_partners_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Data_Partners_Stddev_Pop_Fields = {
  __typename?: 'data_partners_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Data_Partners_Stddev_Samp_Fields = {
  __typename?: 'data_partners_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Data_Partners_Sum_Fields = {
  __typename?: 'data_partners_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "data_partners" */
export enum Data_Partners_Update_Column {
  /** column name */
  ApiKey = 'api_key',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Data_Partners_Var_Pop_Fields = {
  __typename?: 'data_partners_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Data_Partners_Var_Samp_Fields = {
  __typename?: 'data_partners_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Data_Partners_Variance_Fields = {
  __typename?: 'data_partners_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** columns and relationships of "data_raw" */
export type Data_Raw = {
  __typename?: 'data_raw';
  accuracy_weight: Scalars['Int'];
  created_at: Scalars['timestamp'];
  field: Scalars['String'];
  id: Scalars['bigint'];
  partner: Scalars['Int'];
  resource: Scalars['String'];
  resource_id: Scalars['Int'];
  value: Scalars['jsonb'];
};


/** columns and relationships of "data_raw" */
export type Data_RawValueArgs = {
  path: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "data_raw" */
export type Data_Raw_Aggregate = {
  __typename?: 'data_raw_aggregate';
  aggregate: Maybe<Data_Raw_Aggregate_Fields>;
  nodes: Array<Data_Raw>;
};

/** aggregate fields of "data_raw" */
export type Data_Raw_Aggregate_Fields = {
  __typename?: 'data_raw_aggregate_fields';
  avg: Maybe<Data_Raw_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Data_Raw_Max_Fields>;
  min: Maybe<Data_Raw_Min_Fields>;
  stddev: Maybe<Data_Raw_Stddev_Fields>;
  stddev_pop: Maybe<Data_Raw_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Data_Raw_Stddev_Samp_Fields>;
  sum: Maybe<Data_Raw_Sum_Fields>;
  var_pop: Maybe<Data_Raw_Var_Pop_Fields>;
  var_samp: Maybe<Data_Raw_Var_Samp_Fields>;
  variance: Maybe<Data_Raw_Variance_Fields>;
};


/** aggregate fields of "data_raw" */
export type Data_Raw_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Data_Raw_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Data_Raw_Append_Input = {
  value: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Data_Raw_Avg_Fields = {
  __typename?: 'data_raw_avg_fields';
  accuracy_weight: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  partner: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "data_raw". All fields are combined with a logical 'AND'. */
export type Data_Raw_Bool_Exp = {
  _and: InputMaybe<Array<Data_Raw_Bool_Exp>>;
  _not: InputMaybe<Data_Raw_Bool_Exp>;
  _or: InputMaybe<Array<Data_Raw_Bool_Exp>>;
  accuracy_weight: InputMaybe<Int_Comparison_Exp>;
  created_at: InputMaybe<Timestamp_Comparison_Exp>;
  field: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Bigint_Comparison_Exp>;
  partner: InputMaybe<Int_Comparison_Exp>;
  resource: InputMaybe<String_Comparison_Exp>;
  resource_id: InputMaybe<Int_Comparison_Exp>;
  value: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "data_raw" */
export enum Data_Raw_Constraint {
  /** unique or primary key constraint */
  DataRawPkey = 'data_raw_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Data_Raw_Delete_At_Path_Input = {
  value: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Data_Raw_Delete_Elem_Input = {
  value: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Data_Raw_Delete_Key_Input = {
  value: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "data_raw" */
export type Data_Raw_Inc_Input = {
  accuracy_weight: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['bigint']>;
  partner: InputMaybe<Scalars['Int']>;
  resource_id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "data_raw" */
export type Data_Raw_Insert_Input = {
  accuracy_weight: InputMaybe<Scalars['Int']>;
  created_at: InputMaybe<Scalars['timestamp']>;
  field: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['bigint']>;
  partner: InputMaybe<Scalars['Int']>;
  resource: InputMaybe<Scalars['String']>;
  resource_id: InputMaybe<Scalars['Int']>;
  value: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Data_Raw_Max_Fields = {
  __typename?: 'data_raw_max_fields';
  accuracy_weight: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamp']>;
  field: Maybe<Scalars['String']>;
  id: Maybe<Scalars['bigint']>;
  partner: Maybe<Scalars['Int']>;
  resource: Maybe<Scalars['String']>;
  resource_id: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Data_Raw_Min_Fields = {
  __typename?: 'data_raw_min_fields';
  accuracy_weight: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamp']>;
  field: Maybe<Scalars['String']>;
  id: Maybe<Scalars['bigint']>;
  partner: Maybe<Scalars['Int']>;
  resource: Maybe<Scalars['String']>;
  resource_id: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "data_raw" */
export type Data_Raw_Mutation_Response = {
  __typename?: 'data_raw_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Data_Raw>;
};

/** on_conflict condition type for table "data_raw" */
export type Data_Raw_On_Conflict = {
  constraint: Data_Raw_Constraint;
  update_columns: Array<Data_Raw_Update_Column>;
  where: InputMaybe<Data_Raw_Bool_Exp>;
};

/** Ordering options when selecting data from "data_raw". */
export type Data_Raw_Order_By = {
  accuracy_weight: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  field: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  partner: InputMaybe<Order_By>;
  resource: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
  value: InputMaybe<Order_By>;
};

/** primary key columns input for table: data_raw */
export type Data_Raw_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Data_Raw_Prepend_Input = {
  value: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "data_raw" */
export enum Data_Raw_Select_Column {
  /** column name */
  AccuracyWeight = 'accuracy_weight',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Field = 'field',
  /** column name */
  Id = 'id',
  /** column name */
  Partner = 'partner',
  /** column name */
  Resource = 'resource',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "data_raw" */
export type Data_Raw_Set_Input = {
  accuracy_weight: InputMaybe<Scalars['Int']>;
  created_at: InputMaybe<Scalars['timestamp']>;
  field: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['bigint']>;
  partner: InputMaybe<Scalars['Int']>;
  resource: InputMaybe<Scalars['String']>;
  resource_id: InputMaybe<Scalars['Int']>;
  value: InputMaybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Data_Raw_Stddev_Fields = {
  __typename?: 'data_raw_stddev_fields';
  accuracy_weight: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  partner: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Data_Raw_Stddev_Pop_Fields = {
  __typename?: 'data_raw_stddev_pop_fields';
  accuracy_weight: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  partner: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Data_Raw_Stddev_Samp_Fields = {
  __typename?: 'data_raw_stddev_samp_fields';
  accuracy_weight: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  partner: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Data_Raw_Sum_Fields = {
  __typename?: 'data_raw_sum_fields';
  accuracy_weight: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['bigint']>;
  partner: Maybe<Scalars['Int']>;
  resource_id: Maybe<Scalars['Int']>;
};

/** update columns of table "data_raw" */
export enum Data_Raw_Update_Column {
  /** column name */
  AccuracyWeight = 'accuracy_weight',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Field = 'field',
  /** column name */
  Id = 'id',
  /** column name */
  Partner = 'partner',
  /** column name */
  Resource = 'resource',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Data_Raw_Var_Pop_Fields = {
  __typename?: 'data_raw_var_pop_fields';
  accuracy_weight: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  partner: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Data_Raw_Var_Samp_Fields = {
  __typename?: 'data_raw_var_samp_fields';
  accuracy_weight: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  partner: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Data_Raw_Variance_Fields = {
  __typename?: 'data_raw_variance_fields';
  accuracy_weight: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  partner: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** columns and relationships of "data_runs" */
export type Data_Runs = {
  __typename?: 'data_runs';
  classification: Scalars['String'];
  data_raw: Scalars['Int'];
  id: Scalars['bigint'];
  run_at: Scalars['timestamptz'];
  weight: Scalars['Int'];
  weight_normalized: Scalars['float8'];
};

/** aggregated selection of "data_runs" */
export type Data_Runs_Aggregate = {
  __typename?: 'data_runs_aggregate';
  aggregate: Maybe<Data_Runs_Aggregate_Fields>;
  nodes: Array<Data_Runs>;
};

/** aggregate fields of "data_runs" */
export type Data_Runs_Aggregate_Fields = {
  __typename?: 'data_runs_aggregate_fields';
  avg: Maybe<Data_Runs_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Data_Runs_Max_Fields>;
  min: Maybe<Data_Runs_Min_Fields>;
  stddev: Maybe<Data_Runs_Stddev_Fields>;
  stddev_pop: Maybe<Data_Runs_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Data_Runs_Stddev_Samp_Fields>;
  sum: Maybe<Data_Runs_Sum_Fields>;
  var_pop: Maybe<Data_Runs_Var_Pop_Fields>;
  var_samp: Maybe<Data_Runs_Var_Samp_Fields>;
  variance: Maybe<Data_Runs_Variance_Fields>;
};


/** aggregate fields of "data_runs" */
export type Data_Runs_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Data_Runs_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Data_Runs_Avg_Fields = {
  __typename?: 'data_runs_avg_fields';
  data_raw: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  weight: Maybe<Scalars['Float']>;
  weight_normalized: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "data_runs". All fields are combined with a logical 'AND'. */
export type Data_Runs_Bool_Exp = {
  _and: InputMaybe<Array<Data_Runs_Bool_Exp>>;
  _not: InputMaybe<Data_Runs_Bool_Exp>;
  _or: InputMaybe<Array<Data_Runs_Bool_Exp>>;
  classification: InputMaybe<String_Comparison_Exp>;
  data_raw: InputMaybe<Int_Comparison_Exp>;
  id: InputMaybe<Bigint_Comparison_Exp>;
  run_at: InputMaybe<Timestamptz_Comparison_Exp>;
  weight: InputMaybe<Int_Comparison_Exp>;
  weight_normalized: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "data_runs" */
export enum Data_Runs_Constraint {
  /** unique or primary key constraint */
  DataRunsPkey = 'data_runs_pkey'
}

/** input type for incrementing numeric columns in table "data_runs" */
export type Data_Runs_Inc_Input = {
  data_raw: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['bigint']>;
  weight: InputMaybe<Scalars['Int']>;
  weight_normalized: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "data_runs" */
export type Data_Runs_Insert_Input = {
  classification: InputMaybe<Scalars['String']>;
  data_raw: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['bigint']>;
  run_at: InputMaybe<Scalars['timestamptz']>;
  weight: InputMaybe<Scalars['Int']>;
  weight_normalized: InputMaybe<Scalars['float8']>;
};

/** aggregate max on columns */
export type Data_Runs_Max_Fields = {
  __typename?: 'data_runs_max_fields';
  classification: Maybe<Scalars['String']>;
  data_raw: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['bigint']>;
  run_at: Maybe<Scalars['timestamptz']>;
  weight: Maybe<Scalars['Int']>;
  weight_normalized: Maybe<Scalars['float8']>;
};

/** aggregate min on columns */
export type Data_Runs_Min_Fields = {
  __typename?: 'data_runs_min_fields';
  classification: Maybe<Scalars['String']>;
  data_raw: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['bigint']>;
  run_at: Maybe<Scalars['timestamptz']>;
  weight: Maybe<Scalars['Int']>;
  weight_normalized: Maybe<Scalars['float8']>;
};

/** response of any mutation on the table "data_runs" */
export type Data_Runs_Mutation_Response = {
  __typename?: 'data_runs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Data_Runs>;
};

/** on_conflict condition type for table "data_runs" */
export type Data_Runs_On_Conflict = {
  constraint: Data_Runs_Constraint;
  update_columns: Array<Data_Runs_Update_Column>;
  where: InputMaybe<Data_Runs_Bool_Exp>;
};

/** Ordering options when selecting data from "data_runs". */
export type Data_Runs_Order_By = {
  classification: InputMaybe<Order_By>;
  data_raw: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  run_at: InputMaybe<Order_By>;
  weight: InputMaybe<Order_By>;
  weight_normalized: InputMaybe<Order_By>;
};

/** primary key columns input for table: data_runs */
export type Data_Runs_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "data_runs" */
export enum Data_Runs_Select_Column {
  /** column name */
  Classification = 'classification',
  /** column name */
  DataRaw = 'data_raw',
  /** column name */
  Id = 'id',
  /** column name */
  RunAt = 'run_at',
  /** column name */
  Weight = 'weight',
  /** column name */
  WeightNormalized = 'weight_normalized'
}

/** input type for updating data in table "data_runs" */
export type Data_Runs_Set_Input = {
  classification: InputMaybe<Scalars['String']>;
  data_raw: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['bigint']>;
  run_at: InputMaybe<Scalars['timestamptz']>;
  weight: InputMaybe<Scalars['Int']>;
  weight_normalized: InputMaybe<Scalars['float8']>;
};

/** aggregate stddev on columns */
export type Data_Runs_Stddev_Fields = {
  __typename?: 'data_runs_stddev_fields';
  data_raw: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  weight: Maybe<Scalars['Float']>;
  weight_normalized: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Data_Runs_Stddev_Pop_Fields = {
  __typename?: 'data_runs_stddev_pop_fields';
  data_raw: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  weight: Maybe<Scalars['Float']>;
  weight_normalized: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Data_Runs_Stddev_Samp_Fields = {
  __typename?: 'data_runs_stddev_samp_fields';
  data_raw: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  weight: Maybe<Scalars['Float']>;
  weight_normalized: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Data_Runs_Sum_Fields = {
  __typename?: 'data_runs_sum_fields';
  data_raw: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['bigint']>;
  weight: Maybe<Scalars['Int']>;
  weight_normalized: Maybe<Scalars['float8']>;
};

/** update columns of table "data_runs" */
export enum Data_Runs_Update_Column {
  /** column name */
  Classification = 'classification',
  /** column name */
  DataRaw = 'data_raw',
  /** column name */
  Id = 'id',
  /** column name */
  RunAt = 'run_at',
  /** column name */
  Weight = 'weight',
  /** column name */
  WeightNormalized = 'weight_normalized'
}

/** aggregate var_pop on columns */
export type Data_Runs_Var_Pop_Fields = {
  __typename?: 'data_runs_var_pop_fields';
  data_raw: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  weight: Maybe<Scalars['Float']>;
  weight_normalized: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Data_Runs_Var_Samp_Fields = {
  __typename?: 'data_runs_var_samp_fields';
  data_raw: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  weight: Maybe<Scalars['Float']>;
  weight_normalized: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Data_Runs_Variance_Fields = {
  __typename?: 'data_runs_variance_fields';
  data_raw: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  weight: Maybe<Scalars['Float']>;
  weight_normalized: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq: InputMaybe<Scalars['date']>;
  _gt: InputMaybe<Scalars['date']>;
  _gte: InputMaybe<Scalars['date']>;
  _in: InputMaybe<Array<Scalars['date']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['date']>;
  _lte: InputMaybe<Scalars['date']>;
  _neq: InputMaybe<Scalars['date']>;
  _nin: InputMaybe<Array<Scalars['date']>>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq: InputMaybe<Scalars['float8']>;
  _gt: InputMaybe<Scalars['float8']>;
  _gte: InputMaybe<Scalars['float8']>;
  _in: InputMaybe<Array<Scalars['float8']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['float8']>;
  _lte: InputMaybe<Scalars['float8']>;
  _neq: InputMaybe<Scalars['float8']>;
  _nin: InputMaybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "follows" */
export type Follows = {
  __typename?: 'follows';
  created_by_user_id: Scalars['Int'];
  id: Scalars['Int'];
  list_id: Maybe<Scalars['Int']>;
  resource_id: Scalars['Int'];
  resource_type: Scalars['String'];
};

/** aggregated selection of "follows" */
export type Follows_Aggregate = {
  __typename?: 'follows_aggregate';
  aggregate: Maybe<Follows_Aggregate_Fields>;
  nodes: Array<Follows>;
};

/** aggregate fields of "follows" */
export type Follows_Aggregate_Fields = {
  __typename?: 'follows_aggregate_fields';
  avg: Maybe<Follows_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Follows_Max_Fields>;
  min: Maybe<Follows_Min_Fields>;
  stddev: Maybe<Follows_Stddev_Fields>;
  stddev_pop: Maybe<Follows_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Follows_Stddev_Samp_Fields>;
  sum: Maybe<Follows_Sum_Fields>;
  var_pop: Maybe<Follows_Var_Pop_Fields>;
  var_samp: Maybe<Follows_Var_Samp_Fields>;
  variance: Maybe<Follows_Variance_Fields>;
};


/** aggregate fields of "follows" */
export type Follows_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Follows_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Follows_Avg_Fields = {
  __typename?: 'follows_avg_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "follows". All fields are combined with a logical 'AND'. */
export type Follows_Bool_Exp = {
  _and: InputMaybe<Array<Follows_Bool_Exp>>;
  _not: InputMaybe<Follows_Bool_Exp>;
  _or: InputMaybe<Array<Follows_Bool_Exp>>;
  created_by_user_id: InputMaybe<Int_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  list_id: InputMaybe<Int_Comparison_Exp>;
  resource_id: InputMaybe<Int_Comparison_Exp>;
  resource_type: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "follows_companies" */
export type Follows_Companies = {
  __typename?: 'follows_companies';
  /** An object relationship */
  company: Maybe<Companies>;
  created_by_user_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  /** An object relationship */
  list: Maybe<Lists>;
  list_id: Maybe<Scalars['Int']>;
  resource_id: Maybe<Scalars['Int']>;
  resource_type: Maybe<Scalars['String']>;
};

/** aggregated selection of "follows_companies" */
export type Follows_Companies_Aggregate = {
  __typename?: 'follows_companies_aggregate';
  aggregate: Maybe<Follows_Companies_Aggregate_Fields>;
  nodes: Array<Follows_Companies>;
};

/** aggregate fields of "follows_companies" */
export type Follows_Companies_Aggregate_Fields = {
  __typename?: 'follows_companies_aggregate_fields';
  avg: Maybe<Follows_Companies_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Follows_Companies_Max_Fields>;
  min: Maybe<Follows_Companies_Min_Fields>;
  stddev: Maybe<Follows_Companies_Stddev_Fields>;
  stddev_pop: Maybe<Follows_Companies_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Follows_Companies_Stddev_Samp_Fields>;
  sum: Maybe<Follows_Companies_Sum_Fields>;
  var_pop: Maybe<Follows_Companies_Var_Pop_Fields>;
  var_samp: Maybe<Follows_Companies_Var_Samp_Fields>;
  variance: Maybe<Follows_Companies_Variance_Fields>;
};


/** aggregate fields of "follows_companies" */
export type Follows_Companies_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Follows_Companies_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "follows_companies" */
export type Follows_Companies_Aggregate_Order_By = {
  avg: InputMaybe<Follows_Companies_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Follows_Companies_Max_Order_By>;
  min: InputMaybe<Follows_Companies_Min_Order_By>;
  stddev: InputMaybe<Follows_Companies_Stddev_Order_By>;
  stddev_pop: InputMaybe<Follows_Companies_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Follows_Companies_Stddev_Samp_Order_By>;
  sum: InputMaybe<Follows_Companies_Sum_Order_By>;
  var_pop: InputMaybe<Follows_Companies_Var_Pop_Order_By>;
  var_samp: InputMaybe<Follows_Companies_Var_Samp_Order_By>;
  variance: InputMaybe<Follows_Companies_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "follows_companies" */
export type Follows_Companies_Arr_Rel_Insert_Input = {
  data: Array<Follows_Companies_Insert_Input>;
};

/** aggregate avg on columns */
export type Follows_Companies_Avg_Fields = {
  __typename?: 'follows_companies_avg_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "follows_companies" */
export type Follows_Companies_Avg_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "follows_companies". All fields are combined with a logical 'AND'. */
export type Follows_Companies_Bool_Exp = {
  _and: InputMaybe<Array<Follows_Companies_Bool_Exp>>;
  _not: InputMaybe<Follows_Companies_Bool_Exp>;
  _or: InputMaybe<Array<Follows_Companies_Bool_Exp>>;
  company: InputMaybe<Companies_Bool_Exp>;
  created_by_user_id: InputMaybe<Int_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  list: InputMaybe<Lists_Bool_Exp>;
  list_id: InputMaybe<Int_Comparison_Exp>;
  resource_id: InputMaybe<Int_Comparison_Exp>;
  resource_type: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "follows_companies" */
export type Follows_Companies_Inc_Input = {
  created_by_user_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
  list_id: InputMaybe<Scalars['Int']>;
  resource_id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "follows_companies" */
export type Follows_Companies_Insert_Input = {
  company: InputMaybe<Companies_Obj_Rel_Insert_Input>;
  created_by_user_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
  list: InputMaybe<Lists_Obj_Rel_Insert_Input>;
  list_id: InputMaybe<Scalars['Int']>;
  resource_id: InputMaybe<Scalars['Int']>;
  resource_type: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Follows_Companies_Max_Fields = {
  __typename?: 'follows_companies_max_fields';
  created_by_user_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  list_id: Maybe<Scalars['Int']>;
  resource_id: Maybe<Scalars['Int']>;
  resource_type: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "follows_companies" */
export type Follows_Companies_Max_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
  resource_type: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Follows_Companies_Min_Fields = {
  __typename?: 'follows_companies_min_fields';
  created_by_user_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  list_id: Maybe<Scalars['Int']>;
  resource_id: Maybe<Scalars['Int']>;
  resource_type: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "follows_companies" */
export type Follows_Companies_Min_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
  resource_type: InputMaybe<Order_By>;
};

/** response of any mutation on the table "follows_companies" */
export type Follows_Companies_Mutation_Response = {
  __typename?: 'follows_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Follows_Companies>;
};

/** Ordering options when selecting data from "follows_companies". */
export type Follows_Companies_Order_By = {
  company: InputMaybe<Companies_Order_By>;
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list: InputMaybe<Lists_Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
  resource_type: InputMaybe<Order_By>;
};

/** select columns of table "follows_companies" */
export enum Follows_Companies_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  Id = 'id',
  /** column name */
  ListId = 'list_id',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  ResourceType = 'resource_type'
}

/** input type for updating data in table "follows_companies" */
export type Follows_Companies_Set_Input = {
  created_by_user_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
  list_id: InputMaybe<Scalars['Int']>;
  resource_id: InputMaybe<Scalars['Int']>;
  resource_type: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Follows_Companies_Stddev_Fields = {
  __typename?: 'follows_companies_stddev_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "follows_companies" */
export type Follows_Companies_Stddev_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Follows_Companies_Stddev_Pop_Fields = {
  __typename?: 'follows_companies_stddev_pop_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "follows_companies" */
export type Follows_Companies_Stddev_Pop_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Follows_Companies_Stddev_Samp_Fields = {
  __typename?: 'follows_companies_stddev_samp_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "follows_companies" */
export type Follows_Companies_Stddev_Samp_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Follows_Companies_Sum_Fields = {
  __typename?: 'follows_companies_sum_fields';
  created_by_user_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  list_id: Maybe<Scalars['Int']>;
  resource_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "follows_companies" */
export type Follows_Companies_Sum_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Follows_Companies_Var_Pop_Fields = {
  __typename?: 'follows_companies_var_pop_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "follows_companies" */
export type Follows_Companies_Var_Pop_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Follows_Companies_Var_Samp_Fields = {
  __typename?: 'follows_companies_var_samp_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "follows_companies" */
export type Follows_Companies_Var_Samp_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Follows_Companies_Variance_Fields = {
  __typename?: 'follows_companies_variance_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "follows_companies" */
export type Follows_Companies_Variance_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "follows" */
export enum Follows_Constraint {
  /** unique or primary key constraint */
  FollowsPkey = 'follows_pkey',
  /** unique or primary key constraint */
  FollowsResourceTypeResourceIdListIdKey = 'follows_resource_type_resource_id_list_id_key'
}

/** input type for incrementing numeric columns in table "follows" */
export type Follows_Inc_Input = {
  created_by_user_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
  list_id: InputMaybe<Scalars['Int']>;
  resource_id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "follows" */
export type Follows_Insert_Input = {
  created_by_user_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
  list_id: InputMaybe<Scalars['Int']>;
  resource_id: InputMaybe<Scalars['Int']>;
  resource_type: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Follows_Max_Fields = {
  __typename?: 'follows_max_fields';
  created_by_user_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  list_id: Maybe<Scalars['Int']>;
  resource_id: Maybe<Scalars['Int']>;
  resource_type: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Follows_Min_Fields = {
  __typename?: 'follows_min_fields';
  created_by_user_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  list_id: Maybe<Scalars['Int']>;
  resource_id: Maybe<Scalars['Int']>;
  resource_type: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "follows" */
export type Follows_Mutation_Response = {
  __typename?: 'follows_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Follows>;
};

/** on_conflict condition type for table "follows" */
export type Follows_On_Conflict = {
  constraint: Follows_Constraint;
  update_columns: Array<Follows_Update_Column>;
  where: InputMaybe<Follows_Bool_Exp>;
};

/** Ordering options when selecting data from "follows". */
export type Follows_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
  resource_type: InputMaybe<Order_By>;
};

/** primary key columns input for table: follows */
export type Follows_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "follows" */
export enum Follows_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  Id = 'id',
  /** column name */
  ListId = 'list_id',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  ResourceType = 'resource_type'
}

/** input type for updating data in table "follows" */
export type Follows_Set_Input = {
  created_by_user_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
  list_id: InputMaybe<Scalars['Int']>;
  resource_id: InputMaybe<Scalars['Int']>;
  resource_type: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Follows_Stddev_Fields = {
  __typename?: 'follows_stddev_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Follows_Stddev_Pop_Fields = {
  __typename?: 'follows_stddev_pop_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Follows_Stddev_Samp_Fields = {
  __typename?: 'follows_stddev_samp_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Follows_Sum_Fields = {
  __typename?: 'follows_sum_fields';
  created_by_user_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  list_id: Maybe<Scalars['Int']>;
  resource_id: Maybe<Scalars['Int']>;
};

/** update columns of table "follows" */
export enum Follows_Update_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  Id = 'id',
  /** column name */
  ListId = 'list_id',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  ResourceType = 'resource_type'
}

/** aggregate var_pop on columns */
export type Follows_Var_Pop_Fields = {
  __typename?: 'follows_var_pop_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Follows_Var_Samp_Fields = {
  __typename?: 'follows_var_samp_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Follows_Variance_Fields = {
  __typename?: 'follows_variance_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** columns and relationships of "follows_vc_firms" */
export type Follows_Vc_Firms = {
  __typename?: 'follows_vc_firms';
  created_by_user_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  /** An object relationship */
  list: Maybe<Lists>;
  list_id: Maybe<Scalars['Int']>;
  resource_id: Maybe<Scalars['Int']>;
  resource_type: Maybe<Scalars['String']>;
  /** An object relationship */
  vc_firm: Maybe<Vc_Firms>;
};

/** aggregated selection of "follows_vc_firms" */
export type Follows_Vc_Firms_Aggregate = {
  __typename?: 'follows_vc_firms_aggregate';
  aggregate: Maybe<Follows_Vc_Firms_Aggregate_Fields>;
  nodes: Array<Follows_Vc_Firms>;
};

/** aggregate fields of "follows_vc_firms" */
export type Follows_Vc_Firms_Aggregate_Fields = {
  __typename?: 'follows_vc_firms_aggregate_fields';
  avg: Maybe<Follows_Vc_Firms_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Follows_Vc_Firms_Max_Fields>;
  min: Maybe<Follows_Vc_Firms_Min_Fields>;
  stddev: Maybe<Follows_Vc_Firms_Stddev_Fields>;
  stddev_pop: Maybe<Follows_Vc_Firms_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Follows_Vc_Firms_Stddev_Samp_Fields>;
  sum: Maybe<Follows_Vc_Firms_Sum_Fields>;
  var_pop: Maybe<Follows_Vc_Firms_Var_Pop_Fields>;
  var_samp: Maybe<Follows_Vc_Firms_Var_Samp_Fields>;
  variance: Maybe<Follows_Vc_Firms_Variance_Fields>;
};


/** aggregate fields of "follows_vc_firms" */
export type Follows_Vc_Firms_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Follows_Vc_Firms_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "follows_vc_firms" */
export type Follows_Vc_Firms_Aggregate_Order_By = {
  avg: InputMaybe<Follows_Vc_Firms_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Follows_Vc_Firms_Max_Order_By>;
  min: InputMaybe<Follows_Vc_Firms_Min_Order_By>;
  stddev: InputMaybe<Follows_Vc_Firms_Stddev_Order_By>;
  stddev_pop: InputMaybe<Follows_Vc_Firms_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Follows_Vc_Firms_Stddev_Samp_Order_By>;
  sum: InputMaybe<Follows_Vc_Firms_Sum_Order_By>;
  var_pop: InputMaybe<Follows_Vc_Firms_Var_Pop_Order_By>;
  var_samp: InputMaybe<Follows_Vc_Firms_Var_Samp_Order_By>;
  variance: InputMaybe<Follows_Vc_Firms_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "follows_vc_firms" */
export type Follows_Vc_Firms_Arr_Rel_Insert_Input = {
  data: Array<Follows_Vc_Firms_Insert_Input>;
};

/** aggregate avg on columns */
export type Follows_Vc_Firms_Avg_Fields = {
  __typename?: 'follows_vc_firms_avg_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "follows_vc_firms" */
export type Follows_Vc_Firms_Avg_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "follows_vc_firms". All fields are combined with a logical 'AND'. */
export type Follows_Vc_Firms_Bool_Exp = {
  _and: InputMaybe<Array<Follows_Vc_Firms_Bool_Exp>>;
  _not: InputMaybe<Follows_Vc_Firms_Bool_Exp>;
  _or: InputMaybe<Array<Follows_Vc_Firms_Bool_Exp>>;
  created_by_user_id: InputMaybe<Int_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  list: InputMaybe<Lists_Bool_Exp>;
  list_id: InputMaybe<Int_Comparison_Exp>;
  resource_id: InputMaybe<Int_Comparison_Exp>;
  resource_type: InputMaybe<String_Comparison_Exp>;
  vc_firm: InputMaybe<Vc_Firms_Bool_Exp>;
};

/** input type for incrementing numeric columns in table "follows_vc_firms" */
export type Follows_Vc_Firms_Inc_Input = {
  created_by_user_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
  list_id: InputMaybe<Scalars['Int']>;
  resource_id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "follows_vc_firms" */
export type Follows_Vc_Firms_Insert_Input = {
  created_by_user_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
  list: InputMaybe<Lists_Obj_Rel_Insert_Input>;
  list_id: InputMaybe<Scalars['Int']>;
  resource_id: InputMaybe<Scalars['Int']>;
  resource_type: InputMaybe<Scalars['String']>;
  vc_firm: InputMaybe<Vc_Firms_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Follows_Vc_Firms_Max_Fields = {
  __typename?: 'follows_vc_firms_max_fields';
  created_by_user_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  list_id: Maybe<Scalars['Int']>;
  resource_id: Maybe<Scalars['Int']>;
  resource_type: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "follows_vc_firms" */
export type Follows_Vc_Firms_Max_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
  resource_type: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Follows_Vc_Firms_Min_Fields = {
  __typename?: 'follows_vc_firms_min_fields';
  created_by_user_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  list_id: Maybe<Scalars['Int']>;
  resource_id: Maybe<Scalars['Int']>;
  resource_type: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "follows_vc_firms" */
export type Follows_Vc_Firms_Min_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
  resource_type: InputMaybe<Order_By>;
};

/** response of any mutation on the table "follows_vc_firms" */
export type Follows_Vc_Firms_Mutation_Response = {
  __typename?: 'follows_vc_firms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Follows_Vc_Firms>;
};

/** Ordering options when selecting data from "follows_vc_firms". */
export type Follows_Vc_Firms_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list: InputMaybe<Lists_Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
  resource_type: InputMaybe<Order_By>;
  vc_firm: InputMaybe<Vc_Firms_Order_By>;
};

/** select columns of table "follows_vc_firms" */
export enum Follows_Vc_Firms_Select_Column {
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  Id = 'id',
  /** column name */
  ListId = 'list_id',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  ResourceType = 'resource_type'
}

/** input type for updating data in table "follows_vc_firms" */
export type Follows_Vc_Firms_Set_Input = {
  created_by_user_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
  list_id: InputMaybe<Scalars['Int']>;
  resource_id: InputMaybe<Scalars['Int']>;
  resource_type: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Follows_Vc_Firms_Stddev_Fields = {
  __typename?: 'follows_vc_firms_stddev_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "follows_vc_firms" */
export type Follows_Vc_Firms_Stddev_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Follows_Vc_Firms_Stddev_Pop_Fields = {
  __typename?: 'follows_vc_firms_stddev_pop_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "follows_vc_firms" */
export type Follows_Vc_Firms_Stddev_Pop_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Follows_Vc_Firms_Stddev_Samp_Fields = {
  __typename?: 'follows_vc_firms_stddev_samp_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "follows_vc_firms" */
export type Follows_Vc_Firms_Stddev_Samp_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Follows_Vc_Firms_Sum_Fields = {
  __typename?: 'follows_vc_firms_sum_fields';
  created_by_user_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  list_id: Maybe<Scalars['Int']>;
  resource_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "follows_vc_firms" */
export type Follows_Vc_Firms_Sum_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Follows_Vc_Firms_Var_Pop_Fields = {
  __typename?: 'follows_vc_firms_var_pop_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "follows_vc_firms" */
export type Follows_Vc_Firms_Var_Pop_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Follows_Vc_Firms_Var_Samp_Fields = {
  __typename?: 'follows_vc_firms_var_samp_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "follows_vc_firms" */
export type Follows_Vc_Firms_Var_Samp_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Follows_Vc_Firms_Variance_Fields = {
  __typename?: 'follows_vc_firms_variance_fields';
  created_by_user_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  resource_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "follows_vc_firms" */
export type Follows_Vc_Firms_Variance_Order_By = {
  created_by_user_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  resource_id: InputMaybe<Order_By>;
};

/** columns and relationships of "investment_rounds" */
export type Investment_Rounds = {
  __typename?: 'investment_rounds';
  amount: Maybe<Scalars['numeric']>;
  /** An object relationship */
  company: Maybe<Companies>;
  company_id: Maybe<Scalars['Int']>;
  currency: Maybe<Scalars['String']>;
  external_id: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An array relationship */
  investments: Array<Investments>;
  /** An aggregate relationship */
  investments_aggregate: Investments_Aggregate;
  round: Maybe<Scalars['String']>;
  round_date: Maybe<Scalars['String']>;
  status: Scalars['String'];
  valuation: Maybe<Scalars['numeric']>;
};


/** columns and relationships of "investment_rounds" */
export type Investment_RoundsInvestmentsArgs = {
  distinct_on: InputMaybe<Array<Investments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investments_Order_By>>;
  where: InputMaybe<Investments_Bool_Exp>;
};


/** columns and relationships of "investment_rounds" */
export type Investment_RoundsInvestments_AggregateArgs = {
  distinct_on: InputMaybe<Array<Investments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investments_Order_By>>;
  where: InputMaybe<Investments_Bool_Exp>;
};

/** aggregated selection of "investment_rounds" */
export type Investment_Rounds_Aggregate = {
  __typename?: 'investment_rounds_aggregate';
  aggregate: Maybe<Investment_Rounds_Aggregate_Fields>;
  nodes: Array<Investment_Rounds>;
};

/** aggregate fields of "investment_rounds" */
export type Investment_Rounds_Aggregate_Fields = {
  __typename?: 'investment_rounds_aggregate_fields';
  avg: Maybe<Investment_Rounds_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Investment_Rounds_Max_Fields>;
  min: Maybe<Investment_Rounds_Min_Fields>;
  stddev: Maybe<Investment_Rounds_Stddev_Fields>;
  stddev_pop: Maybe<Investment_Rounds_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Investment_Rounds_Stddev_Samp_Fields>;
  sum: Maybe<Investment_Rounds_Sum_Fields>;
  var_pop: Maybe<Investment_Rounds_Var_Pop_Fields>;
  var_samp: Maybe<Investment_Rounds_Var_Samp_Fields>;
  variance: Maybe<Investment_Rounds_Variance_Fields>;
};


/** aggregate fields of "investment_rounds" */
export type Investment_Rounds_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Investment_Rounds_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "investment_rounds" */
export type Investment_Rounds_Aggregate_Order_By = {
  avg: InputMaybe<Investment_Rounds_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Investment_Rounds_Max_Order_By>;
  min: InputMaybe<Investment_Rounds_Min_Order_By>;
  stddev: InputMaybe<Investment_Rounds_Stddev_Order_By>;
  stddev_pop: InputMaybe<Investment_Rounds_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Investment_Rounds_Stddev_Samp_Order_By>;
  sum: InputMaybe<Investment_Rounds_Sum_Order_By>;
  var_pop: InputMaybe<Investment_Rounds_Var_Pop_Order_By>;
  var_samp: InputMaybe<Investment_Rounds_Var_Samp_Order_By>;
  variance: InputMaybe<Investment_Rounds_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "investment_rounds" */
export type Investment_Rounds_Arr_Rel_Insert_Input = {
  data: Array<Investment_Rounds_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Investment_Rounds_On_Conflict>;
};

/** aggregate avg on columns */
export type Investment_Rounds_Avg_Fields = {
  __typename?: 'investment_rounds_avg_fields';
  amount: Maybe<Scalars['Float']>;
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  valuation: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "investment_rounds" */
export type Investment_Rounds_Avg_Order_By = {
  amount: InputMaybe<Order_By>;
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  valuation: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "investment_rounds". All fields are combined with a logical 'AND'. */
export type Investment_Rounds_Bool_Exp = {
  _and: InputMaybe<Array<Investment_Rounds_Bool_Exp>>;
  _not: InputMaybe<Investment_Rounds_Bool_Exp>;
  _or: InputMaybe<Array<Investment_Rounds_Bool_Exp>>;
  amount: InputMaybe<Numeric_Comparison_Exp>;
  company: InputMaybe<Companies_Bool_Exp>;
  company_id: InputMaybe<Int_Comparison_Exp>;
  currency: InputMaybe<String_Comparison_Exp>;
  external_id: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  investments: InputMaybe<Investments_Bool_Exp>;
  round: InputMaybe<String_Comparison_Exp>;
  round_date: InputMaybe<String_Comparison_Exp>;
  status: InputMaybe<String_Comparison_Exp>;
  valuation: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "investment_rounds" */
export enum Investment_Rounds_Constraint {
  /** unique or primary key constraint */
  InvestmentRoundsExternalIdKey = 'investment_rounds_external_id_key',
  /** unique or primary key constraint */
  InvestmentRoundsPkey = 'investment_rounds_pkey'
}

/** input type for incrementing numeric columns in table "investment_rounds" */
export type Investment_Rounds_Inc_Input = {
  amount: InputMaybe<Scalars['numeric']>;
  company_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
  valuation: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "investment_rounds" */
export type Investment_Rounds_Insert_Input = {
  amount: InputMaybe<Scalars['numeric']>;
  company: InputMaybe<Companies_Obj_Rel_Insert_Input>;
  company_id: InputMaybe<Scalars['Int']>;
  currency: InputMaybe<Scalars['String']>;
  external_id: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  investments: InputMaybe<Investments_Arr_Rel_Insert_Input>;
  round: InputMaybe<Scalars['String']>;
  round_date: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
  valuation: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Investment_Rounds_Max_Fields = {
  __typename?: 'investment_rounds_max_fields';
  amount: Maybe<Scalars['numeric']>;
  company_id: Maybe<Scalars['Int']>;
  currency: Maybe<Scalars['String']>;
  external_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  round: Maybe<Scalars['String']>;
  round_date: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  valuation: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "investment_rounds" */
export type Investment_Rounds_Max_Order_By = {
  amount: InputMaybe<Order_By>;
  company_id: InputMaybe<Order_By>;
  currency: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  round: InputMaybe<Order_By>;
  round_date: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  valuation: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Investment_Rounds_Min_Fields = {
  __typename?: 'investment_rounds_min_fields';
  amount: Maybe<Scalars['numeric']>;
  company_id: Maybe<Scalars['Int']>;
  currency: Maybe<Scalars['String']>;
  external_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  round: Maybe<Scalars['String']>;
  round_date: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  valuation: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "investment_rounds" */
export type Investment_Rounds_Min_Order_By = {
  amount: InputMaybe<Order_By>;
  company_id: InputMaybe<Order_By>;
  currency: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  round: InputMaybe<Order_By>;
  round_date: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  valuation: InputMaybe<Order_By>;
};

/** response of any mutation on the table "investment_rounds" */
export type Investment_Rounds_Mutation_Response = {
  __typename?: 'investment_rounds_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Investment_Rounds>;
};

/** input type for inserting object relation for remote table "investment_rounds" */
export type Investment_Rounds_Obj_Rel_Insert_Input = {
  data: Investment_Rounds_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Investment_Rounds_On_Conflict>;
};

/** on_conflict condition type for table "investment_rounds" */
export type Investment_Rounds_On_Conflict = {
  constraint: Investment_Rounds_Constraint;
  update_columns: Array<Investment_Rounds_Update_Column>;
  where: InputMaybe<Investment_Rounds_Bool_Exp>;
};

/** Ordering options when selecting data from "investment_rounds". */
export type Investment_Rounds_Order_By = {
  amount: InputMaybe<Order_By>;
  company: InputMaybe<Companies_Order_By>;
  company_id: InputMaybe<Order_By>;
  currency: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  investments_aggregate: InputMaybe<Investments_Aggregate_Order_By>;
  round: InputMaybe<Order_By>;
  round_date: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  valuation: InputMaybe<Order_By>;
};

/** primary key columns input for table: investment_rounds */
export type Investment_Rounds_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "investment_rounds" */
export enum Investment_Rounds_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  Round = 'round',
  /** column name */
  RoundDate = 'round_date',
  /** column name */
  Status = 'status',
  /** column name */
  Valuation = 'valuation'
}

/** input type for updating data in table "investment_rounds" */
export type Investment_Rounds_Set_Input = {
  amount: InputMaybe<Scalars['numeric']>;
  company_id: InputMaybe<Scalars['Int']>;
  currency: InputMaybe<Scalars['String']>;
  external_id: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  round: InputMaybe<Scalars['String']>;
  round_date: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
  valuation: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Investment_Rounds_Stddev_Fields = {
  __typename?: 'investment_rounds_stddev_fields';
  amount: Maybe<Scalars['Float']>;
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  valuation: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "investment_rounds" */
export type Investment_Rounds_Stddev_Order_By = {
  amount: InputMaybe<Order_By>;
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  valuation: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Investment_Rounds_Stddev_Pop_Fields = {
  __typename?: 'investment_rounds_stddev_pop_fields';
  amount: Maybe<Scalars['Float']>;
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  valuation: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "investment_rounds" */
export type Investment_Rounds_Stddev_Pop_Order_By = {
  amount: InputMaybe<Order_By>;
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  valuation: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Investment_Rounds_Stddev_Samp_Fields = {
  __typename?: 'investment_rounds_stddev_samp_fields';
  amount: Maybe<Scalars['Float']>;
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  valuation: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "investment_rounds" */
export type Investment_Rounds_Stddev_Samp_Order_By = {
  amount: InputMaybe<Order_By>;
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  valuation: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Investment_Rounds_Sum_Fields = {
  __typename?: 'investment_rounds_sum_fields';
  amount: Maybe<Scalars['numeric']>;
  company_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  valuation: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "investment_rounds" */
export type Investment_Rounds_Sum_Order_By = {
  amount: InputMaybe<Order_By>;
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  valuation: InputMaybe<Order_By>;
};

/** update columns of table "investment_rounds" */
export enum Investment_Rounds_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  Round = 'round',
  /** column name */
  RoundDate = 'round_date',
  /** column name */
  Status = 'status',
  /** column name */
  Valuation = 'valuation'
}

/** aggregate var_pop on columns */
export type Investment_Rounds_Var_Pop_Fields = {
  __typename?: 'investment_rounds_var_pop_fields';
  amount: Maybe<Scalars['Float']>;
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  valuation: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "investment_rounds" */
export type Investment_Rounds_Var_Pop_Order_By = {
  amount: InputMaybe<Order_By>;
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  valuation: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Investment_Rounds_Var_Samp_Fields = {
  __typename?: 'investment_rounds_var_samp_fields';
  amount: Maybe<Scalars['Float']>;
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  valuation: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "investment_rounds" */
export type Investment_Rounds_Var_Samp_Order_By = {
  amount: InputMaybe<Order_By>;
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  valuation: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Investment_Rounds_Variance_Fields = {
  __typename?: 'investment_rounds_variance_fields';
  amount: Maybe<Scalars['Float']>;
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  valuation: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "investment_rounds" */
export type Investment_Rounds_Variance_Order_By = {
  amount: InputMaybe<Order_By>;
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  valuation: InputMaybe<Order_By>;
};

/** columns and relationships of "investments" */
export type Investments = {
  __typename?: 'investments';
  external_id: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  investment_round: Maybe<Investment_Rounds>;
  /** An object relationship */
  person: Maybe<People>;
  person_id: Maybe<Scalars['Int']>;
  round_id: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  /** An object relationship */
  vc_firm: Maybe<Vc_Firms>;
  vc_firm_id: Maybe<Scalars['Int']>;
};

/** aggregated selection of "investments" */
export type Investments_Aggregate = {
  __typename?: 'investments_aggregate';
  aggregate: Maybe<Investments_Aggregate_Fields>;
  nodes: Array<Investments>;
};

/** aggregate fields of "investments" */
export type Investments_Aggregate_Fields = {
  __typename?: 'investments_aggregate_fields';
  avg: Maybe<Investments_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Investments_Max_Fields>;
  min: Maybe<Investments_Min_Fields>;
  stddev: Maybe<Investments_Stddev_Fields>;
  stddev_pop: Maybe<Investments_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Investments_Stddev_Samp_Fields>;
  sum: Maybe<Investments_Sum_Fields>;
  var_pop: Maybe<Investments_Var_Pop_Fields>;
  var_samp: Maybe<Investments_Var_Samp_Fields>;
  variance: Maybe<Investments_Variance_Fields>;
};


/** aggregate fields of "investments" */
export type Investments_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Investments_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "investments" */
export type Investments_Aggregate_Order_By = {
  avg: InputMaybe<Investments_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Investments_Max_Order_By>;
  min: InputMaybe<Investments_Min_Order_By>;
  stddev: InputMaybe<Investments_Stddev_Order_By>;
  stddev_pop: InputMaybe<Investments_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Investments_Stddev_Samp_Order_By>;
  sum: InputMaybe<Investments_Sum_Order_By>;
  var_pop: InputMaybe<Investments_Var_Pop_Order_By>;
  var_samp: InputMaybe<Investments_Var_Samp_Order_By>;
  variance: InputMaybe<Investments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "investments" */
export type Investments_Arr_Rel_Insert_Input = {
  data: Array<Investments_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Investments_On_Conflict>;
};

/** aggregate avg on columns */
export type Investments_Avg_Fields = {
  __typename?: 'investments_avg_fields';
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  round_id: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "investments" */
export type Investments_Avg_Order_By = {
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  round_id: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "investments". All fields are combined with a logical 'AND'. */
export type Investments_Bool_Exp = {
  _and: InputMaybe<Array<Investments_Bool_Exp>>;
  _not: InputMaybe<Investments_Bool_Exp>;
  _or: InputMaybe<Array<Investments_Bool_Exp>>;
  external_id: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  investment_round: InputMaybe<Investment_Rounds_Bool_Exp>;
  person: InputMaybe<People_Bool_Exp>;
  person_id: InputMaybe<Int_Comparison_Exp>;
  round_id: InputMaybe<Int_Comparison_Exp>;
  status: InputMaybe<String_Comparison_Exp>;
  vc_firm: InputMaybe<Vc_Firms_Bool_Exp>;
  vc_firm_id: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "investments" */
export enum Investments_Constraint {
  /** unique or primary key constraint */
  InvestmentsExternalIdKey = 'investments_external_id_key',
  /** unique or primary key constraint */
  InvestmentsPkey = 'investments_pkey'
}

/** input type for incrementing numeric columns in table "investments" */
export type Investments_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
  person_id: InputMaybe<Scalars['Int']>;
  round_id: InputMaybe<Scalars['Int']>;
  vc_firm_id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "investments" */
export type Investments_Insert_Input = {
  external_id: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  investment_round: InputMaybe<Investment_Rounds_Obj_Rel_Insert_Input>;
  person: InputMaybe<People_Obj_Rel_Insert_Input>;
  person_id: InputMaybe<Scalars['Int']>;
  round_id: InputMaybe<Scalars['Int']>;
  status: InputMaybe<Scalars['String']>;
  vc_firm: InputMaybe<Vc_Firms_Obj_Rel_Insert_Input>;
  vc_firm_id: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Investments_Max_Fields = {
  __typename?: 'investments_max_fields';
  external_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  person_id: Maybe<Scalars['Int']>;
  round_id: Maybe<Scalars['Int']>;
  status: Maybe<Scalars['String']>;
  vc_firm_id: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "investments" */
export type Investments_Max_Order_By = {
  external_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  round_id: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Investments_Min_Fields = {
  __typename?: 'investments_min_fields';
  external_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  person_id: Maybe<Scalars['Int']>;
  round_id: Maybe<Scalars['Int']>;
  status: Maybe<Scalars['String']>;
  vc_firm_id: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "investments" */
export type Investments_Min_Order_By = {
  external_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  round_id: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** response of any mutation on the table "investments" */
export type Investments_Mutation_Response = {
  __typename?: 'investments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Investments>;
};

/** on_conflict condition type for table "investments" */
export type Investments_On_Conflict = {
  constraint: Investments_Constraint;
  update_columns: Array<Investments_Update_Column>;
  where: InputMaybe<Investments_Bool_Exp>;
};

/** Ordering options when selecting data from "investments". */
export type Investments_Order_By = {
  external_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  investment_round: InputMaybe<Investment_Rounds_Order_By>;
  person: InputMaybe<People_Order_By>;
  person_id: InputMaybe<Order_By>;
  round_id: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  vc_firm: InputMaybe<Vc_Firms_Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** primary key columns input for table: investments */
export type Investments_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "investments" */
export enum Investments_Select_Column {
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  RoundId = 'round_id',
  /** column name */
  Status = 'status',
  /** column name */
  VcFirmId = 'vc_firm_id'
}

/** input type for updating data in table "investments" */
export type Investments_Set_Input = {
  external_id: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  person_id: InputMaybe<Scalars['Int']>;
  round_id: InputMaybe<Scalars['Int']>;
  status: InputMaybe<Scalars['String']>;
  vc_firm_id: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Investments_Stddev_Fields = {
  __typename?: 'investments_stddev_fields';
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  round_id: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "investments" */
export type Investments_Stddev_Order_By = {
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  round_id: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Investments_Stddev_Pop_Fields = {
  __typename?: 'investments_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  round_id: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "investments" */
export type Investments_Stddev_Pop_Order_By = {
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  round_id: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Investments_Stddev_Samp_Fields = {
  __typename?: 'investments_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  round_id: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "investments" */
export type Investments_Stddev_Samp_Order_By = {
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  round_id: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Investments_Sum_Fields = {
  __typename?: 'investments_sum_fields';
  id: Maybe<Scalars['Int']>;
  person_id: Maybe<Scalars['Int']>;
  round_id: Maybe<Scalars['Int']>;
  vc_firm_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "investments" */
export type Investments_Sum_Order_By = {
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  round_id: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** update columns of table "investments" */
export enum Investments_Update_Column {
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  RoundId = 'round_id',
  /** column name */
  Status = 'status',
  /** column name */
  VcFirmId = 'vc_firm_id'
}

/** aggregate var_pop on columns */
export type Investments_Var_Pop_Fields = {
  __typename?: 'investments_var_pop_fields';
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  round_id: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "investments" */
export type Investments_Var_Pop_Order_By = {
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  round_id: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Investments_Var_Samp_Fields = {
  __typename?: 'investments_var_samp_fields';
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  round_id: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "investments" */
export type Investments_Var_Samp_Order_By = {
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  round_id: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Investments_Variance_Fields = {
  __typename?: 'investments_variance_fields';
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  round_id: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "investments" */
export type Investments_Variance_Order_By = {
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  round_id: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** columns and relationships of "investors" */
export type Investors = {
  __typename?: 'investors';
  created_at: Scalars['timestamptz'];
  end_date: Maybe<Scalars['numeric']>;
  external_id: Maybe<Scalars['String']>;
  function: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  person: Maybe<People>;
  person_id: Maybe<Scalars['Int']>;
  seniority: Maybe<Scalars['String']>;
  start_date: Maybe<Scalars['numeric']>;
  title: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  vc_firm: Maybe<Vc_Firms>;
  vc_firm_id: Maybe<Scalars['Int']>;
};

/** aggregated selection of "investors" */
export type Investors_Aggregate = {
  __typename?: 'investors_aggregate';
  aggregate: Maybe<Investors_Aggregate_Fields>;
  nodes: Array<Investors>;
};

/** aggregate fields of "investors" */
export type Investors_Aggregate_Fields = {
  __typename?: 'investors_aggregate_fields';
  avg: Maybe<Investors_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Investors_Max_Fields>;
  min: Maybe<Investors_Min_Fields>;
  stddev: Maybe<Investors_Stddev_Fields>;
  stddev_pop: Maybe<Investors_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Investors_Stddev_Samp_Fields>;
  sum: Maybe<Investors_Sum_Fields>;
  var_pop: Maybe<Investors_Var_Pop_Fields>;
  var_samp: Maybe<Investors_Var_Samp_Fields>;
  variance: Maybe<Investors_Variance_Fields>;
};


/** aggregate fields of "investors" */
export type Investors_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Investors_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "investors" */
export type Investors_Aggregate_Order_By = {
  avg: InputMaybe<Investors_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Investors_Max_Order_By>;
  min: InputMaybe<Investors_Min_Order_By>;
  stddev: InputMaybe<Investors_Stddev_Order_By>;
  stddev_pop: InputMaybe<Investors_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Investors_Stddev_Samp_Order_By>;
  sum: InputMaybe<Investors_Sum_Order_By>;
  var_pop: InputMaybe<Investors_Var_Pop_Order_By>;
  var_samp: InputMaybe<Investors_Var_Samp_Order_By>;
  variance: InputMaybe<Investors_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "investors" */
export type Investors_Arr_Rel_Insert_Input = {
  data: Array<Investors_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Investors_On_Conflict>;
};

/** aggregate avg on columns */
export type Investors_Avg_Fields = {
  __typename?: 'investors_avg_fields';
  end_date: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  start_date: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "investors" */
export type Investors_Avg_Order_By = {
  end_date: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "investors". All fields are combined with a logical 'AND'. */
export type Investors_Bool_Exp = {
  _and: InputMaybe<Array<Investors_Bool_Exp>>;
  _not: InputMaybe<Investors_Bool_Exp>;
  _or: InputMaybe<Array<Investors_Bool_Exp>>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  end_date: InputMaybe<Numeric_Comparison_Exp>;
  external_id: InputMaybe<String_Comparison_Exp>;
  function: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  person: InputMaybe<People_Bool_Exp>;
  person_id: InputMaybe<Int_Comparison_Exp>;
  seniority: InputMaybe<String_Comparison_Exp>;
  start_date: InputMaybe<Numeric_Comparison_Exp>;
  title: InputMaybe<String_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
  vc_firm: InputMaybe<Vc_Firms_Bool_Exp>;
  vc_firm_id: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "investors" */
export enum Investors_Constraint {
  /** unique or primary key constraint */
  InvestorsExternalIdKey = 'investors_external_id_key',
  /** unique or primary key constraint */
  InvestorsPkey = 'investors_pkey'
}

/** input type for incrementing numeric columns in table "investors" */
export type Investors_Inc_Input = {
  end_date: InputMaybe<Scalars['numeric']>;
  id: InputMaybe<Scalars['Int']>;
  person_id: InputMaybe<Scalars['Int']>;
  start_date: InputMaybe<Scalars['numeric']>;
  vc_firm_id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "investors" */
export type Investors_Insert_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  end_date: InputMaybe<Scalars['numeric']>;
  external_id: InputMaybe<Scalars['String']>;
  function: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  person: InputMaybe<People_Obj_Rel_Insert_Input>;
  person_id: InputMaybe<Scalars['Int']>;
  seniority: InputMaybe<Scalars['String']>;
  start_date: InputMaybe<Scalars['numeric']>;
  title: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  vc_firm: InputMaybe<Vc_Firms_Obj_Rel_Insert_Input>;
  vc_firm_id: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Investors_Max_Fields = {
  __typename?: 'investors_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  end_date: Maybe<Scalars['numeric']>;
  external_id: Maybe<Scalars['String']>;
  function: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  person_id: Maybe<Scalars['Int']>;
  seniority: Maybe<Scalars['String']>;
  start_date: Maybe<Scalars['numeric']>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  vc_firm_id: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "investors" */
export type Investors_Max_Order_By = {
  created_at: InputMaybe<Order_By>;
  end_date: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  function: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  seniority: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  title: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Investors_Min_Fields = {
  __typename?: 'investors_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  end_date: Maybe<Scalars['numeric']>;
  external_id: Maybe<Scalars['String']>;
  function: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  person_id: Maybe<Scalars['Int']>;
  seniority: Maybe<Scalars['String']>;
  start_date: Maybe<Scalars['numeric']>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  vc_firm_id: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "investors" */
export type Investors_Min_Order_By = {
  created_at: InputMaybe<Order_By>;
  end_date: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  function: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  seniority: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  title: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** response of any mutation on the table "investors" */
export type Investors_Mutation_Response = {
  __typename?: 'investors_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Investors>;
};

/** on_conflict condition type for table "investors" */
export type Investors_On_Conflict = {
  constraint: Investors_Constraint;
  update_columns: Array<Investors_Update_Column>;
  where: InputMaybe<Investors_Bool_Exp>;
};

/** Ordering options when selecting data from "investors". */
export type Investors_Order_By = {
  created_at: InputMaybe<Order_By>;
  end_date: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  function: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person: InputMaybe<People_Order_By>;
  person_id: InputMaybe<Order_By>;
  seniority: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  title: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  vc_firm: InputMaybe<Vc_Firms_Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** primary key columns input for table: investors */
export type Investors_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "investors" */
export enum Investors_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Function = 'function',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  Seniority = 'seniority',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VcFirmId = 'vc_firm_id'
}

/** input type for updating data in table "investors" */
export type Investors_Set_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  end_date: InputMaybe<Scalars['numeric']>;
  external_id: InputMaybe<Scalars['String']>;
  function: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  person_id: InputMaybe<Scalars['Int']>;
  seniority: InputMaybe<Scalars['String']>;
  start_date: InputMaybe<Scalars['numeric']>;
  title: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  vc_firm_id: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Investors_Stddev_Fields = {
  __typename?: 'investors_stddev_fields';
  end_date: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  start_date: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "investors" */
export type Investors_Stddev_Order_By = {
  end_date: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Investors_Stddev_Pop_Fields = {
  __typename?: 'investors_stddev_pop_fields';
  end_date: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  start_date: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "investors" */
export type Investors_Stddev_Pop_Order_By = {
  end_date: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Investors_Stddev_Samp_Fields = {
  __typename?: 'investors_stddev_samp_fields';
  end_date: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  start_date: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "investors" */
export type Investors_Stddev_Samp_Order_By = {
  end_date: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Investors_Sum_Fields = {
  __typename?: 'investors_sum_fields';
  end_date: Maybe<Scalars['numeric']>;
  id: Maybe<Scalars['Int']>;
  person_id: Maybe<Scalars['Int']>;
  start_date: Maybe<Scalars['numeric']>;
  vc_firm_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "investors" */
export type Investors_Sum_Order_By = {
  end_date: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** update columns of table "investors" */
export enum Investors_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Function = 'function',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  Seniority = 'seniority',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VcFirmId = 'vc_firm_id'
}

/** aggregate var_pop on columns */
export type Investors_Var_Pop_Fields = {
  __typename?: 'investors_var_pop_fields';
  end_date: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  start_date: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "investors" */
export type Investors_Var_Pop_Order_By = {
  end_date: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Investors_Var_Samp_Fields = {
  __typename?: 'investors_var_samp_fields';
  end_date: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  start_date: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "investors" */
export type Investors_Var_Samp_Order_By = {
  end_date: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Investors_Variance_Fields = {
  __typename?: 'investors_variance_fields';
  end_date: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
  start_date: Maybe<Scalars['Float']>;
  vc_firm_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "investors" */
export type Investors_Variance_Order_By = {
  end_date: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  vc_firm_id: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains: InputMaybe<Scalars['jsonb']>;
  _eq: InputMaybe<Scalars['jsonb']>;
  _gt: InputMaybe<Scalars['jsonb']>;
  _gte: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any: InputMaybe<Array<Scalars['String']>>;
  _in: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['jsonb']>;
  _lte: InputMaybe<Scalars['jsonb']>;
  _neq: InputMaybe<Scalars['jsonb']>;
  _nin: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "list_members" */
export type List_Members = {
  __typename?: 'list_members';
  id: Scalars['Int'];
  /** An object relationship */
  list: Lists;
  list_id: Scalars['Int'];
  /** An object relationship */
  user: Maybe<Users>;
  user_id: Scalars['Int'];
};

/** aggregated selection of "list_members" */
export type List_Members_Aggregate = {
  __typename?: 'list_members_aggregate';
  aggregate: Maybe<List_Members_Aggregate_Fields>;
  nodes: Array<List_Members>;
};

/** aggregate fields of "list_members" */
export type List_Members_Aggregate_Fields = {
  __typename?: 'list_members_aggregate_fields';
  avg: Maybe<List_Members_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<List_Members_Max_Fields>;
  min: Maybe<List_Members_Min_Fields>;
  stddev: Maybe<List_Members_Stddev_Fields>;
  stddev_pop: Maybe<List_Members_Stddev_Pop_Fields>;
  stddev_samp: Maybe<List_Members_Stddev_Samp_Fields>;
  sum: Maybe<List_Members_Sum_Fields>;
  var_pop: Maybe<List_Members_Var_Pop_Fields>;
  var_samp: Maybe<List_Members_Var_Samp_Fields>;
  variance: Maybe<List_Members_Variance_Fields>;
};


/** aggregate fields of "list_members" */
export type List_Members_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<List_Members_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "list_members" */
export type List_Members_Aggregate_Order_By = {
  avg: InputMaybe<List_Members_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<List_Members_Max_Order_By>;
  min: InputMaybe<List_Members_Min_Order_By>;
  stddev: InputMaybe<List_Members_Stddev_Order_By>;
  stddev_pop: InputMaybe<List_Members_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<List_Members_Stddev_Samp_Order_By>;
  sum: InputMaybe<List_Members_Sum_Order_By>;
  var_pop: InputMaybe<List_Members_Var_Pop_Order_By>;
  var_samp: InputMaybe<List_Members_Var_Samp_Order_By>;
  variance: InputMaybe<List_Members_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "list_members" */
export type List_Members_Arr_Rel_Insert_Input = {
  data: Array<List_Members_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<List_Members_On_Conflict>;
};

/** aggregate avg on columns */
export type List_Members_Avg_Fields = {
  __typename?: 'list_members_avg_fields';
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "list_members" */
export type List_Members_Avg_Order_By = {
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "list_members". All fields are combined with a logical 'AND'. */
export type List_Members_Bool_Exp = {
  _and: InputMaybe<Array<List_Members_Bool_Exp>>;
  _not: InputMaybe<List_Members_Bool_Exp>;
  _or: InputMaybe<Array<List_Members_Bool_Exp>>;
  id: InputMaybe<Int_Comparison_Exp>;
  list: InputMaybe<Lists_Bool_Exp>;
  list_id: InputMaybe<Int_Comparison_Exp>;
  user: InputMaybe<Users_Bool_Exp>;
  user_id: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "list_members" */
export enum List_Members_Constraint {
  /** unique or primary key constraint */
  ListMembersListIdUserIdKey = 'list_members_list_id_user_id_key',
  /** unique or primary key constraint */
  ListMembersPkey = 'list_members_pkey'
}

/** input type for incrementing numeric columns in table "list_members" */
export type List_Members_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
  list_id: InputMaybe<Scalars['Int']>;
  user_id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "list_members" */
export type List_Members_Insert_Input = {
  id: InputMaybe<Scalars['Int']>;
  list: InputMaybe<Lists_Obj_Rel_Insert_Input>;
  list_id: InputMaybe<Scalars['Int']>;
  user: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type List_Members_Max_Fields = {
  __typename?: 'list_members_max_fields';
  id: Maybe<Scalars['Int']>;
  list_id: Maybe<Scalars['Int']>;
  user_id: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "list_members" */
export type List_Members_Max_Order_By = {
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type List_Members_Min_Fields = {
  __typename?: 'list_members_min_fields';
  id: Maybe<Scalars['Int']>;
  list_id: Maybe<Scalars['Int']>;
  user_id: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "list_members" */
export type List_Members_Min_Order_By = {
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** response of any mutation on the table "list_members" */
export type List_Members_Mutation_Response = {
  __typename?: 'list_members_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<List_Members>;
};

/** on_conflict condition type for table "list_members" */
export type List_Members_On_Conflict = {
  constraint: List_Members_Constraint;
  update_columns: Array<List_Members_Update_Column>;
  where: InputMaybe<List_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "list_members". */
export type List_Members_Order_By = {
  id: InputMaybe<Order_By>;
  list: InputMaybe<Lists_Order_By>;
  list_id: InputMaybe<Order_By>;
  user: InputMaybe<Users_Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** primary key columns input for table: list_members */
export type List_Members_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "list_members" */
export enum List_Members_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ListId = 'list_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "list_members" */
export type List_Members_Set_Input = {
  id: InputMaybe<Scalars['Int']>;
  list_id: InputMaybe<Scalars['Int']>;
  user_id: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type List_Members_Stddev_Fields = {
  __typename?: 'list_members_stddev_fields';
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "list_members" */
export type List_Members_Stddev_Order_By = {
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type List_Members_Stddev_Pop_Fields = {
  __typename?: 'list_members_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "list_members" */
export type List_Members_Stddev_Pop_Order_By = {
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type List_Members_Stddev_Samp_Fields = {
  __typename?: 'list_members_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "list_members" */
export type List_Members_Stddev_Samp_Order_By = {
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type List_Members_Sum_Fields = {
  __typename?: 'list_members_sum_fields';
  id: Maybe<Scalars['Int']>;
  list_id: Maybe<Scalars['Int']>;
  user_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "list_members" */
export type List_Members_Sum_Order_By = {
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** update columns of table "list_members" */
export enum List_Members_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ListId = 'list_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type List_Members_Var_Pop_Fields = {
  __typename?: 'list_members_var_pop_fields';
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "list_members" */
export type List_Members_Var_Pop_Order_By = {
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type List_Members_Var_Samp_Fields = {
  __typename?: 'list_members_var_samp_fields';
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "list_members" */
export type List_Members_Var_Samp_Order_By = {
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type List_Members_Variance_Fields = {
  __typename?: 'list_members_variance_fields';
  id: Maybe<Scalars['Float']>;
  list_id: Maybe<Scalars['Float']>;
  user_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "list_members" */
export type List_Members_Variance_Order_By = {
  id: InputMaybe<Order_By>;
  list_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** columns and relationships of "lists" */
export type Lists = {
  __typename?: 'lists';
  created_by_id: Scalars['Int'];
  /** An array relationship */
  follows_companies: Array<Follows_Companies>;
  /** An aggregate relationship */
  follows_companies_aggregate: Follows_Companies_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** Computed field to get total no. of companies in a list */
  total_no_of_resources: Maybe<Scalars['Int']>;
};


/** columns and relationships of "lists" */
export type ListsFollows_CompaniesArgs = {
  distinct_on: InputMaybe<Array<Follows_Companies_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Companies_Order_By>>;
  where: InputMaybe<Follows_Companies_Bool_Exp>;
};


/** columns and relationships of "lists" */
export type ListsFollows_Companies_AggregateArgs = {
  distinct_on: InputMaybe<Array<Follows_Companies_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Companies_Order_By>>;
  where: InputMaybe<Follows_Companies_Bool_Exp>;
};

/** aggregated selection of "lists" */
export type Lists_Aggregate = {
  __typename?: 'lists_aggregate';
  aggregate: Maybe<Lists_Aggregate_Fields>;
  nodes: Array<Lists>;
};

/** aggregate fields of "lists" */
export type Lists_Aggregate_Fields = {
  __typename?: 'lists_aggregate_fields';
  avg: Maybe<Lists_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Lists_Max_Fields>;
  min: Maybe<Lists_Min_Fields>;
  stddev: Maybe<Lists_Stddev_Fields>;
  stddev_pop: Maybe<Lists_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Lists_Stddev_Samp_Fields>;
  sum: Maybe<Lists_Sum_Fields>;
  var_pop: Maybe<Lists_Var_Pop_Fields>;
  var_samp: Maybe<Lists_Var_Samp_Fields>;
  variance: Maybe<Lists_Variance_Fields>;
};


/** aggregate fields of "lists" */
export type Lists_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Lists_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Lists_Avg_Fields = {
  __typename?: 'lists_avg_fields';
  created_by_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "lists". All fields are combined with a logical 'AND'. */
export type Lists_Bool_Exp = {
  _and: InputMaybe<Array<Lists_Bool_Exp>>;
  _not: InputMaybe<Lists_Bool_Exp>;
  _or: InputMaybe<Array<Lists_Bool_Exp>>;
  created_by_id: InputMaybe<Int_Comparison_Exp>;
  follows_companies: InputMaybe<Follows_Companies_Bool_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  total_no_of_resources: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "lists" */
export enum Lists_Constraint {
  /** unique or primary key constraint */
  ListsCreatedByIdNameKey = 'lists_created_by_id_name_key',
  /** unique or primary key constraint */
  ListsPkey = 'lists_pkey'
}

/** input type for incrementing numeric columns in table "lists" */
export type Lists_Inc_Input = {
  created_by_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "lists" */
export type Lists_Insert_Input = {
  created_by_id: InputMaybe<Scalars['Int']>;
  follows_companies: InputMaybe<Follows_Companies_Arr_Rel_Insert_Input>;
  id: InputMaybe<Scalars['Int']>;
  name: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Lists_Max_Fields = {
  __typename?: 'lists_max_fields';
  created_by_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Lists_Min_Fields = {
  __typename?: 'lists_min_fields';
  created_by_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "lists" */
export type Lists_Mutation_Response = {
  __typename?: 'lists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Lists>;
};

/** input type for inserting object relation for remote table "lists" */
export type Lists_Obj_Rel_Insert_Input = {
  data: Lists_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Lists_On_Conflict>;
};

/** on_conflict condition type for table "lists" */
export type Lists_On_Conflict = {
  constraint: Lists_Constraint;
  update_columns: Array<Lists_Update_Column>;
  where: InputMaybe<Lists_Bool_Exp>;
};

/** Ordering options when selecting data from "lists". */
export type Lists_Order_By = {
  created_by_id: InputMaybe<Order_By>;
  follows_companies_aggregate: InputMaybe<Follows_Companies_Aggregate_Order_By>;
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  total_no_of_resources: InputMaybe<Order_By>;
};

/** primary key columns input for table: lists */
export type Lists_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "lists" */
export enum Lists_Select_Column {
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "lists" */
export type Lists_Set_Input = {
  created_by_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
  name: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Lists_Stddev_Fields = {
  __typename?: 'lists_stddev_fields';
  created_by_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Lists_Stddev_Pop_Fields = {
  __typename?: 'lists_stddev_pop_fields';
  created_by_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Lists_Stddev_Samp_Fields = {
  __typename?: 'lists_stddev_samp_fields';
  created_by_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Lists_Sum_Fields = {
  __typename?: 'lists_sum_fields';
  created_by_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "lists" */
export enum Lists_Update_Column {
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Lists_Var_Pop_Fields = {
  __typename?: 'lists_var_pop_fields';
  created_by_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Lists_Var_Samp_Fields = {
  __typename?: 'lists_var_samp_fields';
  created_by_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Lists_Variance_Fields = {
  __typename?: 'lists_variance_fields';
  created_by_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "actions" */
  delete_actions: Maybe<Actions_Mutation_Response>;
  /** delete single row from the table: "actions" */
  delete_actions_by_pk: Maybe<Actions>;
  /** delete data from the table: "allowed_emails" */
  delete_allowed_emails: Maybe<Allowed_Emails_Mutation_Response>;
  /** delete single row from the table: "allowed_emails" */
  delete_allowed_emails_by_pk: Maybe<Allowed_Emails>;
  /** delete data from the table: "application_meta" */
  delete_application_meta: Maybe<Application_Meta_Mutation_Response>;
  /** delete single row from the table: "application_meta" */
  delete_application_meta_by_pk: Maybe<Application_Meta>;
  /** delete data from the table: "blockchains" */
  delete_blockchains: Maybe<Blockchains_Mutation_Response>;
  /** delete single row from the table: "blockchains" */
  delete_blockchains_by_pk: Maybe<Blockchains>;
  /** delete data from the table: "coins" */
  delete_coins: Maybe<Coins_Mutation_Response>;
  /** delete single row from the table: "coins" */
  delete_coins_by_pk: Maybe<Coins>;
  /** delete data from the table: "companies" */
  delete_companies: Maybe<Companies_Mutation_Response>;
  /** delete single row from the table: "companies" */
  delete_companies_by_pk: Maybe<Companies>;
  /** delete data from the table: "data_actions" */
  delete_data_actions: Maybe<Data_Actions_Mutation_Response>;
  /** delete single row from the table: "data_actions" */
  delete_data_actions_by_pk: Maybe<Data_Actions>;
  /** delete data from the table: "data_fields" */
  delete_data_fields: Maybe<Data_Fields_Mutation_Response>;
  /** delete single row from the table: "data_fields" */
  delete_data_fields_by_pk: Maybe<Data_Fields>;
  /** delete data from the table: "data_partners" */
  delete_data_partners: Maybe<Data_Partners_Mutation_Response>;
  /** delete single row from the table: "data_partners" */
  delete_data_partners_by_pk: Maybe<Data_Partners>;
  /** delete data from the table: "data_raw" */
  delete_data_raw: Maybe<Data_Raw_Mutation_Response>;
  /** delete single row from the table: "data_raw" */
  delete_data_raw_by_pk: Maybe<Data_Raw>;
  /** delete data from the table: "data_runs" */
  delete_data_runs: Maybe<Data_Runs_Mutation_Response>;
  /** delete single row from the table: "data_runs" */
  delete_data_runs_by_pk: Maybe<Data_Runs>;
  /** delete data from the table: "follows" */
  delete_follows: Maybe<Follows_Mutation_Response>;
  /** delete single row from the table: "follows" */
  delete_follows_by_pk: Maybe<Follows>;
  /** delete data from the table: "follows_companies" */
  delete_follows_companies: Maybe<Follows_Companies_Mutation_Response>;
  /** delete data from the table: "follows_vc_firms" */
  delete_follows_vc_firms: Maybe<Follows_Vc_Firms_Mutation_Response>;
  /** delete data from the table: "investment_rounds" */
  delete_investment_rounds: Maybe<Investment_Rounds_Mutation_Response>;
  /** delete single row from the table: "investment_rounds" */
  delete_investment_rounds_by_pk: Maybe<Investment_Rounds>;
  /** delete data from the table: "investments" */
  delete_investments: Maybe<Investments_Mutation_Response>;
  /** delete single row from the table: "investments" */
  delete_investments_by_pk: Maybe<Investments>;
  /** delete data from the table: "investors" */
  delete_investors: Maybe<Investors_Mutation_Response>;
  /** delete single row from the table: "investors" */
  delete_investors_by_pk: Maybe<Investors>;
  /** delete data from the table: "list_members" */
  delete_list_members: Maybe<List_Members_Mutation_Response>;
  /** delete single row from the table: "list_members" */
  delete_list_members_by_pk: Maybe<List_Members>;
  /** delete data from the table: "lists" */
  delete_lists: Maybe<Lists_Mutation_Response>;
  /** delete single row from the table: "lists" */
  delete_lists_by_pk: Maybe<Lists>;
  /** delete data from the table: "people" */
  delete_people: Maybe<People_Mutation_Response>;
  /** delete single row from the table: "people" */
  delete_people_by_pk: Maybe<People>;
  /** delete data from the table: "team_members" */
  delete_team_members: Maybe<Team_Members_Mutation_Response>;
  /** delete single row from the table: "team_members" */
  delete_team_members_by_pk: Maybe<Team_Members>;
  /** delete data from the table: "users" */
  delete_users: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk: Maybe<Users>;
  /** delete data from the table: "vc_firms" */
  delete_vc_firms: Maybe<Vc_Firms_Mutation_Response>;
  /** delete single row from the table: "vc_firms" */
  delete_vc_firms_by_pk: Maybe<Vc_Firms>;
  /** delete data from the table: "waitlist_emails" */
  delete_waitlist_emails: Maybe<Waitlist_Emails_Mutation_Response>;
  /** delete single row from the table: "waitlist_emails" */
  delete_waitlist_emails_by_pk: Maybe<Waitlist_Emails>;
  /** insert data into the table: "actions" */
  insert_actions: Maybe<Actions_Mutation_Response>;
  /** insert a single row into the table: "actions" */
  insert_actions_one: Maybe<Actions>;
  /** insert data into the table: "allowed_emails" */
  insert_allowed_emails: Maybe<Allowed_Emails_Mutation_Response>;
  /** insert a single row into the table: "allowed_emails" */
  insert_allowed_emails_one: Maybe<Allowed_Emails>;
  /** insert data into the table: "application_meta" */
  insert_application_meta: Maybe<Application_Meta_Mutation_Response>;
  /** insert a single row into the table: "application_meta" */
  insert_application_meta_one: Maybe<Application_Meta>;
  /** insert data into the table: "blockchains" */
  insert_blockchains: Maybe<Blockchains_Mutation_Response>;
  /** insert a single row into the table: "blockchains" */
  insert_blockchains_one: Maybe<Blockchains>;
  /** insert data into the table: "coins" */
  insert_coins: Maybe<Coins_Mutation_Response>;
  /** insert a single row into the table: "coins" */
  insert_coins_one: Maybe<Coins>;
  /** insert data into the table: "companies" */
  insert_companies: Maybe<Companies_Mutation_Response>;
  /** insert a single row into the table: "companies" */
  insert_companies_one: Maybe<Companies>;
  /** insert data into the table: "data_actions" */
  insert_data_actions: Maybe<Data_Actions_Mutation_Response>;
  /** insert a single row into the table: "data_actions" */
  insert_data_actions_one: Maybe<Data_Actions>;
  /** insert data into the table: "data_fields" */
  insert_data_fields: Maybe<Data_Fields_Mutation_Response>;
  /** insert a single row into the table: "data_fields" */
  insert_data_fields_one: Maybe<Data_Fields>;
  /** insert data into the table: "data_partners" */
  insert_data_partners: Maybe<Data_Partners_Mutation_Response>;
  /** insert a single row into the table: "data_partners" */
  insert_data_partners_one: Maybe<Data_Partners>;
  /** insert data into the table: "data_raw" */
  insert_data_raw: Maybe<Data_Raw_Mutation_Response>;
  /** insert a single row into the table: "data_raw" */
  insert_data_raw_one: Maybe<Data_Raw>;
  /** insert data into the table: "data_runs" */
  insert_data_runs: Maybe<Data_Runs_Mutation_Response>;
  /** insert a single row into the table: "data_runs" */
  insert_data_runs_one: Maybe<Data_Runs>;
  /** insert data into the table: "follows" */
  insert_follows: Maybe<Follows_Mutation_Response>;
  /** insert data into the table: "follows_companies" */
  insert_follows_companies: Maybe<Follows_Companies_Mutation_Response>;
  /** insert a single row into the table: "follows_companies" */
  insert_follows_companies_one: Maybe<Follows_Companies>;
  /** insert a single row into the table: "follows" */
  insert_follows_one: Maybe<Follows>;
  /** insert data into the table: "follows_vc_firms" */
  insert_follows_vc_firms: Maybe<Follows_Vc_Firms_Mutation_Response>;
  /** insert a single row into the table: "follows_vc_firms" */
  insert_follows_vc_firms_one: Maybe<Follows_Vc_Firms>;
  /** insert data into the table: "investment_rounds" */
  insert_investment_rounds: Maybe<Investment_Rounds_Mutation_Response>;
  /** insert a single row into the table: "investment_rounds" */
  insert_investment_rounds_one: Maybe<Investment_Rounds>;
  /** insert data into the table: "investments" */
  insert_investments: Maybe<Investments_Mutation_Response>;
  /** insert a single row into the table: "investments" */
  insert_investments_one: Maybe<Investments>;
  /** insert data into the table: "investors" */
  insert_investors: Maybe<Investors_Mutation_Response>;
  /** insert a single row into the table: "investors" */
  insert_investors_one: Maybe<Investors>;
  /** insert data into the table: "list_members" */
  insert_list_members: Maybe<List_Members_Mutation_Response>;
  /** insert a single row into the table: "list_members" */
  insert_list_members_one: Maybe<List_Members>;
  /** insert data into the table: "lists" */
  insert_lists: Maybe<Lists_Mutation_Response>;
  /** insert a single row into the table: "lists" */
  insert_lists_one: Maybe<Lists>;
  /** insert data into the table: "people" */
  insert_people: Maybe<People_Mutation_Response>;
  /** insert a single row into the table: "people" */
  insert_people_one: Maybe<People>;
  /** insert data into the table: "team_members" */
  insert_team_members: Maybe<Team_Members_Mutation_Response>;
  /** insert a single row into the table: "team_members" */
  insert_team_members_one: Maybe<Team_Members>;
  /** insert data into the table: "users" */
  insert_users: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  /** insert data into the table: "vc_firms" */
  insert_vc_firms: Maybe<Vc_Firms_Mutation_Response>;
  /** insert a single row into the table: "vc_firms" */
  insert_vc_firms_one: Maybe<Vc_Firms>;
  /** insert data into the table: "waitlist_emails" */
  insert_waitlist_emails: Maybe<Waitlist_Emails_Mutation_Response>;
  /** insert a single row into the table: "waitlist_emails" */
  insert_waitlist_emails_one: Maybe<Waitlist_Emails>;
  /** update data of the table: "actions" */
  update_actions: Maybe<Actions_Mutation_Response>;
  /** update single row of the table: "actions" */
  update_actions_by_pk: Maybe<Actions>;
  /** update data of the table: "allowed_emails" */
  update_allowed_emails: Maybe<Allowed_Emails_Mutation_Response>;
  /** update single row of the table: "allowed_emails" */
  update_allowed_emails_by_pk: Maybe<Allowed_Emails>;
  /** update data of the table: "application_meta" */
  update_application_meta: Maybe<Application_Meta_Mutation_Response>;
  /** update single row of the table: "application_meta" */
  update_application_meta_by_pk: Maybe<Application_Meta>;
  /** update data of the table: "blockchains" */
  update_blockchains: Maybe<Blockchains_Mutation_Response>;
  /** update single row of the table: "blockchains" */
  update_blockchains_by_pk: Maybe<Blockchains>;
  /** update data of the table: "coins" */
  update_coins: Maybe<Coins_Mutation_Response>;
  /** update single row of the table: "coins" */
  update_coins_by_pk: Maybe<Coins>;
  /** update data of the table: "companies" */
  update_companies: Maybe<Companies_Mutation_Response>;
  /** update single row of the table: "companies" */
  update_companies_by_pk: Maybe<Companies>;
  /** update data of the table: "data_actions" */
  update_data_actions: Maybe<Data_Actions_Mutation_Response>;
  /** update single row of the table: "data_actions" */
  update_data_actions_by_pk: Maybe<Data_Actions>;
  /** update data of the table: "data_fields" */
  update_data_fields: Maybe<Data_Fields_Mutation_Response>;
  /** update single row of the table: "data_fields" */
  update_data_fields_by_pk: Maybe<Data_Fields>;
  /** update data of the table: "data_partners" */
  update_data_partners: Maybe<Data_Partners_Mutation_Response>;
  /** update single row of the table: "data_partners" */
  update_data_partners_by_pk: Maybe<Data_Partners>;
  /** update data of the table: "data_raw" */
  update_data_raw: Maybe<Data_Raw_Mutation_Response>;
  /** update single row of the table: "data_raw" */
  update_data_raw_by_pk: Maybe<Data_Raw>;
  /** update data of the table: "data_runs" */
  update_data_runs: Maybe<Data_Runs_Mutation_Response>;
  /** update single row of the table: "data_runs" */
  update_data_runs_by_pk: Maybe<Data_Runs>;
  /** update data of the table: "follows" */
  update_follows: Maybe<Follows_Mutation_Response>;
  /** update single row of the table: "follows" */
  update_follows_by_pk: Maybe<Follows>;
  /** update data of the table: "follows_companies" */
  update_follows_companies: Maybe<Follows_Companies_Mutation_Response>;
  /** update data of the table: "follows_vc_firms" */
  update_follows_vc_firms: Maybe<Follows_Vc_Firms_Mutation_Response>;
  /** update data of the table: "investment_rounds" */
  update_investment_rounds: Maybe<Investment_Rounds_Mutation_Response>;
  /** update single row of the table: "investment_rounds" */
  update_investment_rounds_by_pk: Maybe<Investment_Rounds>;
  /** update data of the table: "investments" */
  update_investments: Maybe<Investments_Mutation_Response>;
  /** update single row of the table: "investments" */
  update_investments_by_pk: Maybe<Investments>;
  /** update data of the table: "investors" */
  update_investors: Maybe<Investors_Mutation_Response>;
  /** update single row of the table: "investors" */
  update_investors_by_pk: Maybe<Investors>;
  /** update data of the table: "list_members" */
  update_list_members: Maybe<List_Members_Mutation_Response>;
  /** update single row of the table: "list_members" */
  update_list_members_by_pk: Maybe<List_Members>;
  /** update data of the table: "lists" */
  update_lists: Maybe<Lists_Mutation_Response>;
  /** update single row of the table: "lists" */
  update_lists_by_pk: Maybe<Lists>;
  /** update data of the table: "people" */
  update_people: Maybe<People_Mutation_Response>;
  /** update single row of the table: "people" */
  update_people_by_pk: Maybe<People>;
  /** update data of the table: "team_members" */
  update_team_members: Maybe<Team_Members_Mutation_Response>;
  /** update single row of the table: "team_members" */
  update_team_members_by_pk: Maybe<Team_Members>;
  /** update data of the table: "users" */
  update_users: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
  /** update data of the table: "vc_firms" */
  update_vc_firms: Maybe<Vc_Firms_Mutation_Response>;
  /** update single row of the table: "vc_firms" */
  update_vc_firms_by_pk: Maybe<Vc_Firms>;
  /** update data of the table: "waitlist_emails" */
  update_waitlist_emails: Maybe<Waitlist_Emails_Mutation_Response>;
  /** update single row of the table: "waitlist_emails" */
  update_waitlist_emails_by_pk: Maybe<Waitlist_Emails>;
};


/** mutation root */
export type Mutation_RootDelete_ActionsArgs = {
  where: Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Actions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Allowed_EmailsArgs = {
  where: Allowed_Emails_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Allowed_Emails_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Application_MetaArgs = {
  where: Application_Meta_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Application_Meta_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_BlockchainsArgs = {
  where: Blockchains_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blockchains_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CoinsArgs = {
  where: Coins_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Coins_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CompaniesArgs = {
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Companies_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Data_ActionsArgs = {
  where: Data_Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Data_Actions_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Data_FieldsArgs = {
  where: Data_Fields_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Data_Fields_By_PkArgs = {
  path: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Data_PartnersArgs = {
  where: Data_Partners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Data_Partners_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Data_RawArgs = {
  where: Data_Raw_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Data_Raw_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Data_RunsArgs = {
  where: Data_Runs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Data_Runs_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_FollowsArgs = {
  where: Follows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Follows_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Follows_CompaniesArgs = {
  where: Follows_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Follows_Vc_FirmsArgs = {
  where: Follows_Vc_Firms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Investment_RoundsArgs = {
  where: Investment_Rounds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Investment_Rounds_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_InvestmentsArgs = {
  where: Investments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Investments_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_InvestorsArgs = {
  where: Investors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Investors_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_List_MembersArgs = {
  where: List_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_List_Members_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ListsArgs = {
  where: Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Lists_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PeopleArgs = {
  where: People_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_People_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Team_MembersArgs = {
  where: Team_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_Members_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vc_FirmsArgs = {
  where: Vc_Firms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vc_Firms_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Waitlist_EmailsArgs = {
  where: Waitlist_Emails_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Waitlist_Emails_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ActionsArgs = {
  objects: Array<Actions_Insert_Input>;
  on_conflict: InputMaybe<Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Actions_OneArgs = {
  object: Actions_Insert_Input;
  on_conflict: InputMaybe<Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Allowed_EmailsArgs = {
  objects: Array<Allowed_Emails_Insert_Input>;
  on_conflict: InputMaybe<Allowed_Emails_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Allowed_Emails_OneArgs = {
  object: Allowed_Emails_Insert_Input;
  on_conflict: InputMaybe<Allowed_Emails_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Application_MetaArgs = {
  objects: Array<Application_Meta_Insert_Input>;
  on_conflict: InputMaybe<Application_Meta_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Application_Meta_OneArgs = {
  object: Application_Meta_Insert_Input;
  on_conflict: InputMaybe<Application_Meta_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BlockchainsArgs = {
  objects: Array<Blockchains_Insert_Input>;
  on_conflict: InputMaybe<Blockchains_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blockchains_OneArgs = {
  object: Blockchains_Insert_Input;
  on_conflict: InputMaybe<Blockchains_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CoinsArgs = {
  objects: Array<Coins_Insert_Input>;
  on_conflict: InputMaybe<Coins_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Coins_OneArgs = {
  object: Coins_Insert_Input;
  on_conflict: InputMaybe<Coins_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CompaniesArgs = {
  objects: Array<Companies_Insert_Input>;
  on_conflict: InputMaybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Companies_OneArgs = {
  object: Companies_Insert_Input;
  on_conflict: InputMaybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Data_ActionsArgs = {
  objects: Array<Data_Actions_Insert_Input>;
  on_conflict: InputMaybe<Data_Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Data_Actions_OneArgs = {
  object: Data_Actions_Insert_Input;
  on_conflict: InputMaybe<Data_Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Data_FieldsArgs = {
  objects: Array<Data_Fields_Insert_Input>;
  on_conflict: InputMaybe<Data_Fields_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Data_Fields_OneArgs = {
  object: Data_Fields_Insert_Input;
  on_conflict: InputMaybe<Data_Fields_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Data_PartnersArgs = {
  objects: Array<Data_Partners_Insert_Input>;
  on_conflict: InputMaybe<Data_Partners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Data_Partners_OneArgs = {
  object: Data_Partners_Insert_Input;
  on_conflict: InputMaybe<Data_Partners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Data_RawArgs = {
  objects: Array<Data_Raw_Insert_Input>;
  on_conflict: InputMaybe<Data_Raw_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Data_Raw_OneArgs = {
  object: Data_Raw_Insert_Input;
  on_conflict: InputMaybe<Data_Raw_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Data_RunsArgs = {
  objects: Array<Data_Runs_Insert_Input>;
  on_conflict: InputMaybe<Data_Runs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Data_Runs_OneArgs = {
  object: Data_Runs_Insert_Input;
  on_conflict: InputMaybe<Data_Runs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FollowsArgs = {
  objects: Array<Follows_Insert_Input>;
  on_conflict: InputMaybe<Follows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Follows_CompaniesArgs = {
  objects: Array<Follows_Companies_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Follows_Companies_OneArgs = {
  object: Follows_Companies_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Follows_OneArgs = {
  object: Follows_Insert_Input;
  on_conflict: InputMaybe<Follows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Follows_Vc_FirmsArgs = {
  objects: Array<Follows_Vc_Firms_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Follows_Vc_Firms_OneArgs = {
  object: Follows_Vc_Firms_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Investment_RoundsArgs = {
  objects: Array<Investment_Rounds_Insert_Input>;
  on_conflict: InputMaybe<Investment_Rounds_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Investment_Rounds_OneArgs = {
  object: Investment_Rounds_Insert_Input;
  on_conflict: InputMaybe<Investment_Rounds_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InvestmentsArgs = {
  objects: Array<Investments_Insert_Input>;
  on_conflict: InputMaybe<Investments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Investments_OneArgs = {
  object: Investments_Insert_Input;
  on_conflict: InputMaybe<Investments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InvestorsArgs = {
  objects: Array<Investors_Insert_Input>;
  on_conflict: InputMaybe<Investors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Investors_OneArgs = {
  object: Investors_Insert_Input;
  on_conflict: InputMaybe<Investors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_List_MembersArgs = {
  objects: Array<List_Members_Insert_Input>;
  on_conflict: InputMaybe<List_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_List_Members_OneArgs = {
  object: List_Members_Insert_Input;
  on_conflict: InputMaybe<List_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ListsArgs = {
  objects: Array<Lists_Insert_Input>;
  on_conflict: InputMaybe<Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lists_OneArgs = {
  object: Lists_Insert_Input;
  on_conflict: InputMaybe<Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PeopleArgs = {
  objects: Array<People_Insert_Input>;
  on_conflict: InputMaybe<People_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_People_OneArgs = {
  object: People_Insert_Input;
  on_conflict: InputMaybe<People_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_MembersArgs = {
  objects: Array<Team_Members_Insert_Input>;
  on_conflict: InputMaybe<Team_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_Members_OneArgs = {
  object: Team_Members_Insert_Input;
  on_conflict: InputMaybe<Team_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vc_FirmsArgs = {
  objects: Array<Vc_Firms_Insert_Input>;
  on_conflict: InputMaybe<Vc_Firms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vc_Firms_OneArgs = {
  object: Vc_Firms_Insert_Input;
  on_conflict: InputMaybe<Vc_Firms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Waitlist_EmailsArgs = {
  objects: Array<Waitlist_Emails_Insert_Input>;
  on_conflict: InputMaybe<Waitlist_Emails_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Waitlist_Emails_OneArgs = {
  object: Waitlist_Emails_Insert_Input;
  on_conflict: InputMaybe<Waitlist_Emails_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ActionsArgs = {
  _append: InputMaybe<Actions_Append_Input>;
  _delete_at_path: InputMaybe<Actions_Delete_At_Path_Input>;
  _delete_elem: InputMaybe<Actions_Delete_Elem_Input>;
  _delete_key: InputMaybe<Actions_Delete_Key_Input>;
  _inc: InputMaybe<Actions_Inc_Input>;
  _prepend: InputMaybe<Actions_Prepend_Input>;
  _set: InputMaybe<Actions_Set_Input>;
  where: Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Actions_By_PkArgs = {
  _append: InputMaybe<Actions_Append_Input>;
  _delete_at_path: InputMaybe<Actions_Delete_At_Path_Input>;
  _delete_elem: InputMaybe<Actions_Delete_Elem_Input>;
  _delete_key: InputMaybe<Actions_Delete_Key_Input>;
  _inc: InputMaybe<Actions_Inc_Input>;
  _prepend: InputMaybe<Actions_Prepend_Input>;
  _set: InputMaybe<Actions_Set_Input>;
  pk_columns: Actions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Allowed_EmailsArgs = {
  _inc: InputMaybe<Allowed_Emails_Inc_Input>;
  _set: InputMaybe<Allowed_Emails_Set_Input>;
  where: Allowed_Emails_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Allowed_Emails_By_PkArgs = {
  _inc: InputMaybe<Allowed_Emails_Inc_Input>;
  _set: InputMaybe<Allowed_Emails_Set_Input>;
  pk_columns: Allowed_Emails_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Application_MetaArgs = {
  _inc: InputMaybe<Application_Meta_Inc_Input>;
  _set: InputMaybe<Application_Meta_Set_Input>;
  where: Application_Meta_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Application_Meta_By_PkArgs = {
  _inc: InputMaybe<Application_Meta_Inc_Input>;
  _set: InputMaybe<Application_Meta_Set_Input>;
  pk_columns: Application_Meta_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BlockchainsArgs = {
  _inc: InputMaybe<Blockchains_Inc_Input>;
  _set: InputMaybe<Blockchains_Set_Input>;
  where: Blockchains_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blockchains_By_PkArgs = {
  _inc: InputMaybe<Blockchains_Inc_Input>;
  _set: InputMaybe<Blockchains_Set_Input>;
  pk_columns: Blockchains_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CoinsArgs = {
  _inc: InputMaybe<Coins_Inc_Input>;
  _set: InputMaybe<Coins_Set_Input>;
  where: Coins_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Coins_By_PkArgs = {
  _inc: InputMaybe<Coins_Inc_Input>;
  _set: InputMaybe<Coins_Set_Input>;
  pk_columns: Coins_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CompaniesArgs = {
  _append: InputMaybe<Companies_Append_Input>;
  _delete_at_path: InputMaybe<Companies_Delete_At_Path_Input>;
  _delete_elem: InputMaybe<Companies_Delete_Elem_Input>;
  _delete_key: InputMaybe<Companies_Delete_Key_Input>;
  _inc: InputMaybe<Companies_Inc_Input>;
  _prepend: InputMaybe<Companies_Prepend_Input>;
  _set: InputMaybe<Companies_Set_Input>;
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Companies_By_PkArgs = {
  _append: InputMaybe<Companies_Append_Input>;
  _delete_at_path: InputMaybe<Companies_Delete_At_Path_Input>;
  _delete_elem: InputMaybe<Companies_Delete_Elem_Input>;
  _delete_key: InputMaybe<Companies_Delete_Key_Input>;
  _inc: InputMaybe<Companies_Inc_Input>;
  _prepend: InputMaybe<Companies_Prepend_Input>;
  _set: InputMaybe<Companies_Set_Input>;
  pk_columns: Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Data_ActionsArgs = {
  _inc: InputMaybe<Data_Actions_Inc_Input>;
  _set: InputMaybe<Data_Actions_Set_Input>;
  where: Data_Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Data_Actions_By_PkArgs = {
  _inc: InputMaybe<Data_Actions_Inc_Input>;
  _set: InputMaybe<Data_Actions_Set_Input>;
  pk_columns: Data_Actions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Data_FieldsArgs = {
  _inc: InputMaybe<Data_Fields_Inc_Input>;
  _set: InputMaybe<Data_Fields_Set_Input>;
  where: Data_Fields_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Data_Fields_By_PkArgs = {
  _inc: InputMaybe<Data_Fields_Inc_Input>;
  _set: InputMaybe<Data_Fields_Set_Input>;
  pk_columns: Data_Fields_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Data_PartnersArgs = {
  _inc: InputMaybe<Data_Partners_Inc_Input>;
  _set: InputMaybe<Data_Partners_Set_Input>;
  where: Data_Partners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Data_Partners_By_PkArgs = {
  _inc: InputMaybe<Data_Partners_Inc_Input>;
  _set: InputMaybe<Data_Partners_Set_Input>;
  pk_columns: Data_Partners_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Data_RawArgs = {
  _append: InputMaybe<Data_Raw_Append_Input>;
  _delete_at_path: InputMaybe<Data_Raw_Delete_At_Path_Input>;
  _delete_elem: InputMaybe<Data_Raw_Delete_Elem_Input>;
  _delete_key: InputMaybe<Data_Raw_Delete_Key_Input>;
  _inc: InputMaybe<Data_Raw_Inc_Input>;
  _prepend: InputMaybe<Data_Raw_Prepend_Input>;
  _set: InputMaybe<Data_Raw_Set_Input>;
  where: Data_Raw_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Data_Raw_By_PkArgs = {
  _append: InputMaybe<Data_Raw_Append_Input>;
  _delete_at_path: InputMaybe<Data_Raw_Delete_At_Path_Input>;
  _delete_elem: InputMaybe<Data_Raw_Delete_Elem_Input>;
  _delete_key: InputMaybe<Data_Raw_Delete_Key_Input>;
  _inc: InputMaybe<Data_Raw_Inc_Input>;
  _prepend: InputMaybe<Data_Raw_Prepend_Input>;
  _set: InputMaybe<Data_Raw_Set_Input>;
  pk_columns: Data_Raw_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Data_RunsArgs = {
  _inc: InputMaybe<Data_Runs_Inc_Input>;
  _set: InputMaybe<Data_Runs_Set_Input>;
  where: Data_Runs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Data_Runs_By_PkArgs = {
  _inc: InputMaybe<Data_Runs_Inc_Input>;
  _set: InputMaybe<Data_Runs_Set_Input>;
  pk_columns: Data_Runs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FollowsArgs = {
  _inc: InputMaybe<Follows_Inc_Input>;
  _set: InputMaybe<Follows_Set_Input>;
  where: Follows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Follows_By_PkArgs = {
  _inc: InputMaybe<Follows_Inc_Input>;
  _set: InputMaybe<Follows_Set_Input>;
  pk_columns: Follows_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Follows_CompaniesArgs = {
  _inc: InputMaybe<Follows_Companies_Inc_Input>;
  _set: InputMaybe<Follows_Companies_Set_Input>;
  where: Follows_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Follows_Vc_FirmsArgs = {
  _inc: InputMaybe<Follows_Vc_Firms_Inc_Input>;
  _set: InputMaybe<Follows_Vc_Firms_Set_Input>;
  where: Follows_Vc_Firms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Investment_RoundsArgs = {
  _inc: InputMaybe<Investment_Rounds_Inc_Input>;
  _set: InputMaybe<Investment_Rounds_Set_Input>;
  where: Investment_Rounds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Investment_Rounds_By_PkArgs = {
  _inc: InputMaybe<Investment_Rounds_Inc_Input>;
  _set: InputMaybe<Investment_Rounds_Set_Input>;
  pk_columns: Investment_Rounds_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InvestmentsArgs = {
  _inc: InputMaybe<Investments_Inc_Input>;
  _set: InputMaybe<Investments_Set_Input>;
  where: Investments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Investments_By_PkArgs = {
  _inc: InputMaybe<Investments_Inc_Input>;
  _set: InputMaybe<Investments_Set_Input>;
  pk_columns: Investments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InvestorsArgs = {
  _inc: InputMaybe<Investors_Inc_Input>;
  _set: InputMaybe<Investors_Set_Input>;
  where: Investors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Investors_By_PkArgs = {
  _inc: InputMaybe<Investors_Inc_Input>;
  _set: InputMaybe<Investors_Set_Input>;
  pk_columns: Investors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_List_MembersArgs = {
  _inc: InputMaybe<List_Members_Inc_Input>;
  _set: InputMaybe<List_Members_Set_Input>;
  where: List_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_List_Members_By_PkArgs = {
  _inc: InputMaybe<List_Members_Inc_Input>;
  _set: InputMaybe<List_Members_Set_Input>;
  pk_columns: List_Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ListsArgs = {
  _inc: InputMaybe<Lists_Inc_Input>;
  _set: InputMaybe<Lists_Set_Input>;
  where: Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Lists_By_PkArgs = {
  _inc: InputMaybe<Lists_Inc_Input>;
  _set: InputMaybe<Lists_Set_Input>;
  pk_columns: Lists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PeopleArgs = {
  _append: InputMaybe<People_Append_Input>;
  _delete_at_path: InputMaybe<People_Delete_At_Path_Input>;
  _delete_elem: InputMaybe<People_Delete_Elem_Input>;
  _delete_key: InputMaybe<People_Delete_Key_Input>;
  _inc: InputMaybe<People_Inc_Input>;
  _prepend: InputMaybe<People_Prepend_Input>;
  _set: InputMaybe<People_Set_Input>;
  where: People_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_People_By_PkArgs = {
  _append: InputMaybe<People_Append_Input>;
  _delete_at_path: InputMaybe<People_Delete_At_Path_Input>;
  _delete_elem: InputMaybe<People_Delete_Elem_Input>;
  _delete_key: InputMaybe<People_Delete_Key_Input>;
  _inc: InputMaybe<People_Inc_Input>;
  _prepend: InputMaybe<People_Prepend_Input>;
  _set: InputMaybe<People_Set_Input>;
  pk_columns: People_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Team_MembersArgs = {
  _inc: InputMaybe<Team_Members_Inc_Input>;
  _set: InputMaybe<Team_Members_Set_Input>;
  where: Team_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Members_By_PkArgs = {
  _inc: InputMaybe<Team_Members_Inc_Input>;
  _set: InputMaybe<Team_Members_Set_Input>;
  pk_columns: Team_Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc: InputMaybe<Users_Inc_Input>;
  _set: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc: InputMaybe<Users_Inc_Input>;
  _set: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vc_FirmsArgs = {
  _append: InputMaybe<Vc_Firms_Append_Input>;
  _delete_at_path: InputMaybe<Vc_Firms_Delete_At_Path_Input>;
  _delete_elem: InputMaybe<Vc_Firms_Delete_Elem_Input>;
  _delete_key: InputMaybe<Vc_Firms_Delete_Key_Input>;
  _inc: InputMaybe<Vc_Firms_Inc_Input>;
  _prepend: InputMaybe<Vc_Firms_Prepend_Input>;
  _set: InputMaybe<Vc_Firms_Set_Input>;
  where: Vc_Firms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vc_Firms_By_PkArgs = {
  _append: InputMaybe<Vc_Firms_Append_Input>;
  _delete_at_path: InputMaybe<Vc_Firms_Delete_At_Path_Input>;
  _delete_elem: InputMaybe<Vc_Firms_Delete_Elem_Input>;
  _delete_key: InputMaybe<Vc_Firms_Delete_Key_Input>;
  _inc: InputMaybe<Vc_Firms_Inc_Input>;
  _prepend: InputMaybe<Vc_Firms_Prepend_Input>;
  _set: InputMaybe<Vc_Firms_Set_Input>;
  pk_columns: Vc_Firms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Waitlist_EmailsArgs = {
  _inc: InputMaybe<Waitlist_Emails_Inc_Input>;
  _set: InputMaybe<Waitlist_Emails_Set_Input>;
  where: Waitlist_Emails_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Waitlist_Emails_By_PkArgs = {
  _inc: InputMaybe<Waitlist_Emails_Inc_Input>;
  _set: InputMaybe<Waitlist_Emails_Set_Input>;
  pk_columns: Waitlist_Emails_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq: InputMaybe<Scalars['numeric']>;
  _gt: InputMaybe<Scalars['numeric']>;
  _gte: InputMaybe<Scalars['numeric']>;
  _in: InputMaybe<Array<Scalars['numeric']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['numeric']>;
  _lte: InputMaybe<Scalars['numeric']>;
  _neq: InputMaybe<Scalars['numeric']>;
  _nin: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "people" */
export type People = {
  __typename?: 'people';
  created_at: Scalars['timestamptz'];
  external_id: Maybe<Scalars['String']>;
  github: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An array relationship */
  investments: Array<Investments>;
  /** An aggregate relationship */
  investments_aggregate: Investments_Aggregate;
  /** An array relationship */
  investors: Array<Investors>;
  /** An aggregate relationship */
  investors_aggregate: Investors_Aggregate;
  linkedin: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  personal_email: Maybe<Scalars['String']>;
  picture: Maybe<Scalars['jsonb']>;
  slug: Maybe<Scalars['String']>;
  status: Scalars['String'];
  /** An array relationship */
  team_members: Array<Team_Members>;
  /** An aggregate relationship */
  team_members_aggregate: Team_Members_Aggregate;
  type: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  work_email: Maybe<Scalars['String']>;
};


/** columns and relationships of "people" */
export type PeopleInvestmentsArgs = {
  distinct_on: InputMaybe<Array<Investments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investments_Order_By>>;
  where: InputMaybe<Investments_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeopleInvestments_AggregateArgs = {
  distinct_on: InputMaybe<Array<Investments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investments_Order_By>>;
  where: InputMaybe<Investments_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeopleInvestorsArgs = {
  distinct_on: InputMaybe<Array<Investors_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investors_Order_By>>;
  where: InputMaybe<Investors_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeopleInvestors_AggregateArgs = {
  distinct_on: InputMaybe<Array<Investors_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investors_Order_By>>;
  where: InputMaybe<Investors_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeoplePictureArgs = {
  path: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "people" */
export type PeopleTeam_MembersArgs = {
  distinct_on: InputMaybe<Array<Team_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Team_Members_Order_By>>;
  where: InputMaybe<Team_Members_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeopleTeam_Members_AggregateArgs = {
  distinct_on: InputMaybe<Array<Team_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Team_Members_Order_By>>;
  where: InputMaybe<Team_Members_Bool_Exp>;
};

/** aggregated selection of "people" */
export type People_Aggregate = {
  __typename?: 'people_aggregate';
  aggregate: Maybe<People_Aggregate_Fields>;
  nodes: Array<People>;
};

/** aggregate fields of "people" */
export type People_Aggregate_Fields = {
  __typename?: 'people_aggregate_fields';
  avg: Maybe<People_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<People_Max_Fields>;
  min: Maybe<People_Min_Fields>;
  stddev: Maybe<People_Stddev_Fields>;
  stddev_pop: Maybe<People_Stddev_Pop_Fields>;
  stddev_samp: Maybe<People_Stddev_Samp_Fields>;
  sum: Maybe<People_Sum_Fields>;
  var_pop: Maybe<People_Var_Pop_Fields>;
  var_samp: Maybe<People_Var_Samp_Fields>;
  variance: Maybe<People_Variance_Fields>;
};


/** aggregate fields of "people" */
export type People_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<People_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type People_Append_Input = {
  picture: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type People_Avg_Fields = {
  __typename?: 'people_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "people". All fields are combined with a logical 'AND'. */
export type People_Bool_Exp = {
  _and: InputMaybe<Array<People_Bool_Exp>>;
  _not: InputMaybe<People_Bool_Exp>;
  _or: InputMaybe<Array<People_Bool_Exp>>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  external_id: InputMaybe<String_Comparison_Exp>;
  github: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  investments: InputMaybe<Investments_Bool_Exp>;
  investors: InputMaybe<Investors_Bool_Exp>;
  linkedin: InputMaybe<String_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  personal_email: InputMaybe<String_Comparison_Exp>;
  picture: InputMaybe<Jsonb_Comparison_Exp>;
  slug: InputMaybe<String_Comparison_Exp>;
  status: InputMaybe<String_Comparison_Exp>;
  team_members: InputMaybe<Team_Members_Bool_Exp>;
  type: InputMaybe<String_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
  work_email: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "people" */
export enum People_Constraint {
  /** unique or primary key constraint */
  PeopleExternalIdKey = 'people_external_id_key',
  /** unique or primary key constraint */
  PeoplePkey = 'people_pkey',
  /** unique or primary key constraint */
  PeopleSlugKey = 'people_slug_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type People_Delete_At_Path_Input = {
  picture: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type People_Delete_Elem_Input = {
  picture: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type People_Delete_Key_Input = {
  picture: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "people" */
export type People_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "people" */
export type People_Insert_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  external_id: InputMaybe<Scalars['String']>;
  github: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  investments: InputMaybe<Investments_Arr_Rel_Insert_Input>;
  investors: InputMaybe<Investors_Arr_Rel_Insert_Input>;
  linkedin: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  personal_email: InputMaybe<Scalars['String']>;
  picture: InputMaybe<Scalars['jsonb']>;
  slug: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
  team_members: InputMaybe<Team_Members_Arr_Rel_Insert_Input>;
  type: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  work_email: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type People_Max_Fields = {
  __typename?: 'people_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  external_id: Maybe<Scalars['String']>;
  github: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  linkedin: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  personal_email: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  work_email: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type People_Min_Fields = {
  __typename?: 'people_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  external_id: Maybe<Scalars['String']>;
  github: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  linkedin: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  personal_email: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  work_email: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "people" */
export type People_Mutation_Response = {
  __typename?: 'people_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<People>;
};

/** input type for inserting object relation for remote table "people" */
export type People_Obj_Rel_Insert_Input = {
  data: People_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<People_On_Conflict>;
};

/** on_conflict condition type for table "people" */
export type People_On_Conflict = {
  constraint: People_Constraint;
  update_columns: Array<People_Update_Column>;
  where: InputMaybe<People_Bool_Exp>;
};

/** Ordering options when selecting data from "people". */
export type People_Order_By = {
  created_at: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  github: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  investments_aggregate: InputMaybe<Investments_Aggregate_Order_By>;
  investors_aggregate: InputMaybe<Investors_Aggregate_Order_By>;
  linkedin: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  personal_email: InputMaybe<Order_By>;
  picture: InputMaybe<Order_By>;
  slug: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  team_members_aggregate: InputMaybe<Team_Members_Aggregate_Order_By>;
  type: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  work_email: InputMaybe<Order_By>;
};

/** primary key columns input for table: people */
export type People_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type People_Prepend_Input = {
  picture: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "people" */
export enum People_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Github = 'github',
  /** column name */
  Id = 'id',
  /** column name */
  Linkedin = 'linkedin',
  /** column name */
  Name = 'name',
  /** column name */
  PersonalEmail = 'personal_email',
  /** column name */
  Picture = 'picture',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkEmail = 'work_email'
}

/** input type for updating data in table "people" */
export type People_Set_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  external_id: InputMaybe<Scalars['String']>;
  github: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  linkedin: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  personal_email: InputMaybe<Scalars['String']>;
  picture: InputMaybe<Scalars['jsonb']>;
  slug: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  work_email: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type People_Stddev_Fields = {
  __typename?: 'people_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type People_Stddev_Pop_Fields = {
  __typename?: 'people_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type People_Stddev_Samp_Fields = {
  __typename?: 'people_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type People_Sum_Fields = {
  __typename?: 'people_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "people" */
export enum People_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Github = 'github',
  /** column name */
  Id = 'id',
  /** column name */
  Linkedin = 'linkedin',
  /** column name */
  Name = 'name',
  /** column name */
  PersonalEmail = 'personal_email',
  /** column name */
  Picture = 'picture',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkEmail = 'work_email'
}

/** aggregate var_pop on columns */
export type People_Var_Pop_Fields = {
  __typename?: 'people_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type People_Var_Samp_Fields = {
  __typename?: 'people_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type People_Variance_Fields = {
  __typename?: 'people_variance_fields';
  id: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "actions" */
  actions: Array<Actions>;
  /** fetch aggregated fields from the table: "actions" */
  actions_aggregate: Actions_Aggregate;
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk: Maybe<Actions>;
  /** fetch data from the table: "allowed_emails" */
  allowed_emails: Array<Allowed_Emails>;
  /** fetch aggregated fields from the table: "allowed_emails" */
  allowed_emails_aggregate: Allowed_Emails_Aggregate;
  /** fetch data from the table: "allowed_emails" using primary key columns */
  allowed_emails_by_pk: Maybe<Allowed_Emails>;
  /** fetch data from the table: "application_meta" */
  application_meta: Array<Application_Meta>;
  /** fetch aggregated fields from the table: "application_meta" */
  application_meta_aggregate: Application_Meta_Aggregate;
  /** fetch data from the table: "application_meta" using primary key columns */
  application_meta_by_pk: Maybe<Application_Meta>;
  /** fetch data from the table: "blockchains" */
  blockchains: Array<Blockchains>;
  /** fetch aggregated fields from the table: "blockchains" */
  blockchains_aggregate: Blockchains_Aggregate;
  /** fetch data from the table: "blockchains" using primary key columns */
  blockchains_by_pk: Maybe<Blockchains>;
  /** fetch data from the table: "coins" */
  coins: Array<Coins>;
  /** fetch aggregated fields from the table: "coins" */
  coins_aggregate: Coins_Aggregate;
  /** fetch data from the table: "coins" using primary key columns */
  coins_by_pk: Maybe<Coins>;
  /** fetch data from the table: "companies" */
  companies: Array<Companies>;
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk: Maybe<Companies>;
  /** fetch data from the table: "data_actions" */
  data_actions: Array<Data_Actions>;
  /** fetch aggregated fields from the table: "data_actions" */
  data_actions_aggregate: Data_Actions_Aggregate;
  /** fetch data from the table: "data_actions" using primary key columns */
  data_actions_by_pk: Maybe<Data_Actions>;
  /** fetch data from the table: "data_fields" */
  data_fields: Array<Data_Fields>;
  /** fetch aggregated fields from the table: "data_fields" */
  data_fields_aggregate: Data_Fields_Aggregate;
  /** fetch data from the table: "data_fields" using primary key columns */
  data_fields_by_pk: Maybe<Data_Fields>;
  /** fetch data from the table: "data_partners" */
  data_partners: Array<Data_Partners>;
  /** fetch aggregated fields from the table: "data_partners" */
  data_partners_aggregate: Data_Partners_Aggregate;
  /** fetch data from the table: "data_partners" using primary key columns */
  data_partners_by_pk: Maybe<Data_Partners>;
  /** fetch data from the table: "data_raw" */
  data_raw: Array<Data_Raw>;
  /** fetch aggregated fields from the table: "data_raw" */
  data_raw_aggregate: Data_Raw_Aggregate;
  /** fetch data from the table: "data_raw" using primary key columns */
  data_raw_by_pk: Maybe<Data_Raw>;
  /** fetch data from the table: "data_runs" */
  data_runs: Array<Data_Runs>;
  /** fetch aggregated fields from the table: "data_runs" */
  data_runs_aggregate: Data_Runs_Aggregate;
  /** fetch data from the table: "data_runs" using primary key columns */
  data_runs_by_pk: Maybe<Data_Runs>;
  /** fetch data from the table: "follows" */
  follows: Array<Follows>;
  /** fetch aggregated fields from the table: "follows" */
  follows_aggregate: Follows_Aggregate;
  /** fetch data from the table: "follows" using primary key columns */
  follows_by_pk: Maybe<Follows>;
  /** An array relationship */
  follows_companies: Array<Follows_Companies>;
  /** An aggregate relationship */
  follows_companies_aggregate: Follows_Companies_Aggregate;
  /** fetch data from the table: "follows_vc_firms" */
  follows_vc_firms: Array<Follows_Vc_Firms>;
  /** fetch aggregated fields from the table: "follows_vc_firms" */
  follows_vc_firms_aggregate: Follows_Vc_Firms_Aggregate;
  /** An array relationship */
  investment_rounds: Array<Investment_Rounds>;
  /** An aggregate relationship */
  investment_rounds_aggregate: Investment_Rounds_Aggregate;
  /** fetch data from the table: "investment_rounds" using primary key columns */
  investment_rounds_by_pk: Maybe<Investment_Rounds>;
  /** An array relationship */
  investments: Array<Investments>;
  /** An aggregate relationship */
  investments_aggregate: Investments_Aggregate;
  /** fetch data from the table: "investments" using primary key columns */
  investments_by_pk: Maybe<Investments>;
  /** An array relationship */
  investors: Array<Investors>;
  /** An aggregate relationship */
  investors_aggregate: Investors_Aggregate;
  /** fetch data from the table: "investors" using primary key columns */
  investors_by_pk: Maybe<Investors>;
  /** An array relationship */
  list_members: Array<List_Members>;
  /** An aggregate relationship */
  list_members_aggregate: List_Members_Aggregate;
  /** fetch data from the table: "list_members" using primary key columns */
  list_members_by_pk: Maybe<List_Members>;
  /** fetch data from the table: "lists" */
  lists: Array<Lists>;
  /** fetch aggregated fields from the table: "lists" */
  lists_aggregate: Lists_Aggregate;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk: Maybe<Lists>;
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  people_aggregate: People_Aggregate;
  /** fetch data from the table: "people" using primary key columns */
  people_by_pk: Maybe<People>;
  /** An array relationship */
  team_members: Array<Team_Members>;
  /** An aggregate relationship */
  team_members_aggregate: Team_Members_Aggregate;
  /** fetch data from the table: "team_members" using primary key columns */
  team_members_by_pk: Maybe<Team_Members>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table: "vc_firms" */
  vc_firms: Array<Vc_Firms>;
  /** fetch aggregated fields from the table: "vc_firms" */
  vc_firms_aggregate: Vc_Firms_Aggregate;
  /** fetch data from the table: "vc_firms" using primary key columns */
  vc_firms_by_pk: Maybe<Vc_Firms>;
  /** fetch data from the table: "waitlist_emails" */
  waitlist_emails: Array<Waitlist_Emails>;
  /** fetch aggregated fields from the table: "waitlist_emails" */
  waitlist_emails_aggregate: Waitlist_Emails_Aggregate;
  /** fetch data from the table: "waitlist_emails" using primary key columns */
  waitlist_emails_by_pk: Maybe<Waitlist_Emails>;
};


export type Query_RootActionsArgs = {
  distinct_on: InputMaybe<Array<Actions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Actions_Order_By>>;
  where: InputMaybe<Actions_Bool_Exp>;
};


export type Query_RootActions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Actions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Actions_Order_By>>;
  where: InputMaybe<Actions_Bool_Exp>;
};


export type Query_RootActions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAllowed_EmailsArgs = {
  distinct_on: InputMaybe<Array<Allowed_Emails_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Allowed_Emails_Order_By>>;
  where: InputMaybe<Allowed_Emails_Bool_Exp>;
};


export type Query_RootAllowed_Emails_AggregateArgs = {
  distinct_on: InputMaybe<Array<Allowed_Emails_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Allowed_Emails_Order_By>>;
  where: InputMaybe<Allowed_Emails_Bool_Exp>;
};


export type Query_RootAllowed_Emails_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootApplication_MetaArgs = {
  distinct_on: InputMaybe<Array<Application_Meta_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Application_Meta_Order_By>>;
  where: InputMaybe<Application_Meta_Bool_Exp>;
};


export type Query_RootApplication_Meta_AggregateArgs = {
  distinct_on: InputMaybe<Array<Application_Meta_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Application_Meta_Order_By>>;
  where: InputMaybe<Application_Meta_Bool_Exp>;
};


export type Query_RootApplication_Meta_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootBlockchainsArgs = {
  distinct_on: InputMaybe<Array<Blockchains_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Blockchains_Order_By>>;
  where: InputMaybe<Blockchains_Bool_Exp>;
};


export type Query_RootBlockchains_AggregateArgs = {
  distinct_on: InputMaybe<Array<Blockchains_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Blockchains_Order_By>>;
  where: InputMaybe<Blockchains_Bool_Exp>;
};


export type Query_RootBlockchains_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCoinsArgs = {
  distinct_on: InputMaybe<Array<Coins_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Coins_Order_By>>;
  where: InputMaybe<Coins_Bool_Exp>;
};


export type Query_RootCoins_AggregateArgs = {
  distinct_on: InputMaybe<Array<Coins_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Coins_Order_By>>;
  where: InputMaybe<Coins_Bool_Exp>;
};


export type Query_RootCoins_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCompaniesArgs = {
  distinct_on: InputMaybe<Array<Companies_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Companies_Order_By>>;
  where: InputMaybe<Companies_Bool_Exp>;
};


export type Query_RootCompanies_AggregateArgs = {
  distinct_on: InputMaybe<Array<Companies_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Companies_Order_By>>;
  where: InputMaybe<Companies_Bool_Exp>;
};


export type Query_RootCompanies_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootData_ActionsArgs = {
  distinct_on: InputMaybe<Array<Data_Actions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Actions_Order_By>>;
  where: InputMaybe<Data_Actions_Bool_Exp>;
};


export type Query_RootData_Actions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Data_Actions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Actions_Order_By>>;
  where: InputMaybe<Data_Actions_Bool_Exp>;
};


export type Query_RootData_Actions_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootData_FieldsArgs = {
  distinct_on: InputMaybe<Array<Data_Fields_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Fields_Order_By>>;
  where: InputMaybe<Data_Fields_Bool_Exp>;
};


export type Query_RootData_Fields_AggregateArgs = {
  distinct_on: InputMaybe<Array<Data_Fields_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Fields_Order_By>>;
  where: InputMaybe<Data_Fields_Bool_Exp>;
};


export type Query_RootData_Fields_By_PkArgs = {
  path: Scalars['String'];
};


export type Query_RootData_PartnersArgs = {
  distinct_on: InputMaybe<Array<Data_Partners_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Partners_Order_By>>;
  where: InputMaybe<Data_Partners_Bool_Exp>;
};


export type Query_RootData_Partners_AggregateArgs = {
  distinct_on: InputMaybe<Array<Data_Partners_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Partners_Order_By>>;
  where: InputMaybe<Data_Partners_Bool_Exp>;
};


export type Query_RootData_Partners_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootData_RawArgs = {
  distinct_on: InputMaybe<Array<Data_Raw_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Raw_Order_By>>;
  where: InputMaybe<Data_Raw_Bool_Exp>;
};


export type Query_RootData_Raw_AggregateArgs = {
  distinct_on: InputMaybe<Array<Data_Raw_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Raw_Order_By>>;
  where: InputMaybe<Data_Raw_Bool_Exp>;
};


export type Query_RootData_Raw_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootData_RunsArgs = {
  distinct_on: InputMaybe<Array<Data_Runs_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Runs_Order_By>>;
  where: InputMaybe<Data_Runs_Bool_Exp>;
};


export type Query_RootData_Runs_AggregateArgs = {
  distinct_on: InputMaybe<Array<Data_Runs_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Runs_Order_By>>;
  where: InputMaybe<Data_Runs_Bool_Exp>;
};


export type Query_RootData_Runs_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootFollowsArgs = {
  distinct_on: InputMaybe<Array<Follows_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Order_By>>;
  where: InputMaybe<Follows_Bool_Exp>;
};


export type Query_RootFollows_AggregateArgs = {
  distinct_on: InputMaybe<Array<Follows_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Order_By>>;
  where: InputMaybe<Follows_Bool_Exp>;
};


export type Query_RootFollows_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFollows_CompaniesArgs = {
  distinct_on: InputMaybe<Array<Follows_Companies_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Companies_Order_By>>;
  where: InputMaybe<Follows_Companies_Bool_Exp>;
};


export type Query_RootFollows_Companies_AggregateArgs = {
  distinct_on: InputMaybe<Array<Follows_Companies_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Companies_Order_By>>;
  where: InputMaybe<Follows_Companies_Bool_Exp>;
};


export type Query_RootFollows_Vc_FirmsArgs = {
  distinct_on: InputMaybe<Array<Follows_Vc_Firms_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Vc_Firms_Order_By>>;
  where: InputMaybe<Follows_Vc_Firms_Bool_Exp>;
};


export type Query_RootFollows_Vc_Firms_AggregateArgs = {
  distinct_on: InputMaybe<Array<Follows_Vc_Firms_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Vc_Firms_Order_By>>;
  where: InputMaybe<Follows_Vc_Firms_Bool_Exp>;
};


export type Query_RootInvestment_RoundsArgs = {
  distinct_on: InputMaybe<Array<Investment_Rounds_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investment_Rounds_Order_By>>;
  where: InputMaybe<Investment_Rounds_Bool_Exp>;
};


export type Query_RootInvestment_Rounds_AggregateArgs = {
  distinct_on: InputMaybe<Array<Investment_Rounds_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investment_Rounds_Order_By>>;
  where: InputMaybe<Investment_Rounds_Bool_Exp>;
};


export type Query_RootInvestment_Rounds_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInvestmentsArgs = {
  distinct_on: InputMaybe<Array<Investments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investments_Order_By>>;
  where: InputMaybe<Investments_Bool_Exp>;
};


export type Query_RootInvestments_AggregateArgs = {
  distinct_on: InputMaybe<Array<Investments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investments_Order_By>>;
  where: InputMaybe<Investments_Bool_Exp>;
};


export type Query_RootInvestments_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInvestorsArgs = {
  distinct_on: InputMaybe<Array<Investors_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investors_Order_By>>;
  where: InputMaybe<Investors_Bool_Exp>;
};


export type Query_RootInvestors_AggregateArgs = {
  distinct_on: InputMaybe<Array<Investors_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investors_Order_By>>;
  where: InputMaybe<Investors_Bool_Exp>;
};


export type Query_RootInvestors_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootList_MembersArgs = {
  distinct_on: InputMaybe<Array<List_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<List_Members_Order_By>>;
  where: InputMaybe<List_Members_Bool_Exp>;
};


export type Query_RootList_Members_AggregateArgs = {
  distinct_on: InputMaybe<Array<List_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<List_Members_Order_By>>;
  where: InputMaybe<List_Members_Bool_Exp>;
};


export type Query_RootList_Members_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootListsArgs = {
  distinct_on: InputMaybe<Array<Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Lists_Order_By>>;
  where: InputMaybe<Lists_Bool_Exp>;
};


export type Query_RootLists_AggregateArgs = {
  distinct_on: InputMaybe<Array<Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Lists_Order_By>>;
  where: InputMaybe<Lists_Bool_Exp>;
};


export type Query_RootLists_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPeopleArgs = {
  distinct_on: InputMaybe<Array<People_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<People_Order_By>>;
  where: InputMaybe<People_Bool_Exp>;
};


export type Query_RootPeople_AggregateArgs = {
  distinct_on: InputMaybe<Array<People_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<People_Order_By>>;
  where: InputMaybe<People_Bool_Exp>;
};


export type Query_RootPeople_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTeam_MembersArgs = {
  distinct_on: InputMaybe<Array<Team_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Team_Members_Order_By>>;
  where: InputMaybe<Team_Members_Bool_Exp>;
};


export type Query_RootTeam_Members_AggregateArgs = {
  distinct_on: InputMaybe<Array<Team_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Team_Members_Order_By>>;
  where: InputMaybe<Team_Members_Bool_Exp>;
};


export type Query_RootTeam_Members_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVc_FirmsArgs = {
  distinct_on: InputMaybe<Array<Vc_Firms_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Vc_Firms_Order_By>>;
  where: InputMaybe<Vc_Firms_Bool_Exp>;
};


export type Query_RootVc_Firms_AggregateArgs = {
  distinct_on: InputMaybe<Array<Vc_Firms_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Vc_Firms_Order_By>>;
  where: InputMaybe<Vc_Firms_Bool_Exp>;
};


export type Query_RootVc_Firms_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootWaitlist_EmailsArgs = {
  distinct_on: InputMaybe<Array<Waitlist_Emails_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Waitlist_Emails_Order_By>>;
  where: InputMaybe<Waitlist_Emails_Bool_Exp>;
};


export type Query_RootWaitlist_Emails_AggregateArgs = {
  distinct_on: InputMaybe<Array<Waitlist_Emails_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Waitlist_Emails_Order_By>>;
  where: InputMaybe<Waitlist_Emails_Bool_Exp>;
};


export type Query_RootWaitlist_Emails_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "actions" */
  actions: Array<Actions>;
  /** fetch aggregated fields from the table: "actions" */
  actions_aggregate: Actions_Aggregate;
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk: Maybe<Actions>;
  /** fetch data from the table: "allowed_emails" */
  allowed_emails: Array<Allowed_Emails>;
  /** fetch aggregated fields from the table: "allowed_emails" */
  allowed_emails_aggregate: Allowed_Emails_Aggregate;
  /** fetch data from the table: "allowed_emails" using primary key columns */
  allowed_emails_by_pk: Maybe<Allowed_Emails>;
  /** fetch data from the table: "application_meta" */
  application_meta: Array<Application_Meta>;
  /** fetch aggregated fields from the table: "application_meta" */
  application_meta_aggregate: Application_Meta_Aggregate;
  /** fetch data from the table: "application_meta" using primary key columns */
  application_meta_by_pk: Maybe<Application_Meta>;
  /** fetch data from the table: "blockchains" */
  blockchains: Array<Blockchains>;
  /** fetch aggregated fields from the table: "blockchains" */
  blockchains_aggregate: Blockchains_Aggregate;
  /** fetch data from the table: "blockchains" using primary key columns */
  blockchains_by_pk: Maybe<Blockchains>;
  /** fetch data from the table: "coins" */
  coins: Array<Coins>;
  /** fetch aggregated fields from the table: "coins" */
  coins_aggregate: Coins_Aggregate;
  /** fetch data from the table: "coins" using primary key columns */
  coins_by_pk: Maybe<Coins>;
  /** fetch data from the table: "companies" */
  companies: Array<Companies>;
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk: Maybe<Companies>;
  /** fetch data from the table: "data_actions" */
  data_actions: Array<Data_Actions>;
  /** fetch aggregated fields from the table: "data_actions" */
  data_actions_aggregate: Data_Actions_Aggregate;
  /** fetch data from the table: "data_actions" using primary key columns */
  data_actions_by_pk: Maybe<Data_Actions>;
  /** fetch data from the table: "data_fields" */
  data_fields: Array<Data_Fields>;
  /** fetch aggregated fields from the table: "data_fields" */
  data_fields_aggregate: Data_Fields_Aggregate;
  /** fetch data from the table: "data_fields" using primary key columns */
  data_fields_by_pk: Maybe<Data_Fields>;
  /** fetch data from the table: "data_partners" */
  data_partners: Array<Data_Partners>;
  /** fetch aggregated fields from the table: "data_partners" */
  data_partners_aggregate: Data_Partners_Aggregate;
  /** fetch data from the table: "data_partners" using primary key columns */
  data_partners_by_pk: Maybe<Data_Partners>;
  /** fetch data from the table: "data_raw" */
  data_raw: Array<Data_Raw>;
  /** fetch aggregated fields from the table: "data_raw" */
  data_raw_aggregate: Data_Raw_Aggregate;
  /** fetch data from the table: "data_raw" using primary key columns */
  data_raw_by_pk: Maybe<Data_Raw>;
  /** fetch data from the table: "data_runs" */
  data_runs: Array<Data_Runs>;
  /** fetch aggregated fields from the table: "data_runs" */
  data_runs_aggregate: Data_Runs_Aggregate;
  /** fetch data from the table: "data_runs" using primary key columns */
  data_runs_by_pk: Maybe<Data_Runs>;
  /** fetch data from the table: "follows" */
  follows: Array<Follows>;
  /** fetch aggregated fields from the table: "follows" */
  follows_aggregate: Follows_Aggregate;
  /** fetch data from the table: "follows" using primary key columns */
  follows_by_pk: Maybe<Follows>;
  /** An array relationship */
  follows_companies: Array<Follows_Companies>;
  /** An aggregate relationship */
  follows_companies_aggregate: Follows_Companies_Aggregate;
  /** fetch data from the table: "follows_vc_firms" */
  follows_vc_firms: Array<Follows_Vc_Firms>;
  /** fetch aggregated fields from the table: "follows_vc_firms" */
  follows_vc_firms_aggregate: Follows_Vc_Firms_Aggregate;
  /** An array relationship */
  investment_rounds: Array<Investment_Rounds>;
  /** An aggregate relationship */
  investment_rounds_aggregate: Investment_Rounds_Aggregate;
  /** fetch data from the table: "investment_rounds" using primary key columns */
  investment_rounds_by_pk: Maybe<Investment_Rounds>;
  /** An array relationship */
  investments: Array<Investments>;
  /** An aggregate relationship */
  investments_aggregate: Investments_Aggregate;
  /** fetch data from the table: "investments" using primary key columns */
  investments_by_pk: Maybe<Investments>;
  /** An array relationship */
  investors: Array<Investors>;
  /** An aggregate relationship */
  investors_aggregate: Investors_Aggregate;
  /** fetch data from the table: "investors" using primary key columns */
  investors_by_pk: Maybe<Investors>;
  /** An array relationship */
  list_members: Array<List_Members>;
  /** An aggregate relationship */
  list_members_aggregate: List_Members_Aggregate;
  /** fetch data from the table: "list_members" using primary key columns */
  list_members_by_pk: Maybe<List_Members>;
  /** fetch data from the table: "lists" */
  lists: Array<Lists>;
  /** fetch aggregated fields from the table: "lists" */
  lists_aggregate: Lists_Aggregate;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk: Maybe<Lists>;
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  people_aggregate: People_Aggregate;
  /** fetch data from the table: "people" using primary key columns */
  people_by_pk: Maybe<People>;
  /** An array relationship */
  team_members: Array<Team_Members>;
  /** An aggregate relationship */
  team_members_aggregate: Team_Members_Aggregate;
  /** fetch data from the table: "team_members" using primary key columns */
  team_members_by_pk: Maybe<Team_Members>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table: "vc_firms" */
  vc_firms: Array<Vc_Firms>;
  /** fetch aggregated fields from the table: "vc_firms" */
  vc_firms_aggregate: Vc_Firms_Aggregate;
  /** fetch data from the table: "vc_firms" using primary key columns */
  vc_firms_by_pk: Maybe<Vc_Firms>;
  /** fetch data from the table: "waitlist_emails" */
  waitlist_emails: Array<Waitlist_Emails>;
  /** fetch aggregated fields from the table: "waitlist_emails" */
  waitlist_emails_aggregate: Waitlist_Emails_Aggregate;
  /** fetch data from the table: "waitlist_emails" using primary key columns */
  waitlist_emails_by_pk: Maybe<Waitlist_Emails>;
};


export type Subscription_RootActionsArgs = {
  distinct_on: InputMaybe<Array<Actions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Actions_Order_By>>;
  where: InputMaybe<Actions_Bool_Exp>;
};


export type Subscription_RootActions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Actions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Actions_Order_By>>;
  where: InputMaybe<Actions_Bool_Exp>;
};


export type Subscription_RootActions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAllowed_EmailsArgs = {
  distinct_on: InputMaybe<Array<Allowed_Emails_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Allowed_Emails_Order_By>>;
  where: InputMaybe<Allowed_Emails_Bool_Exp>;
};


export type Subscription_RootAllowed_Emails_AggregateArgs = {
  distinct_on: InputMaybe<Array<Allowed_Emails_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Allowed_Emails_Order_By>>;
  where: InputMaybe<Allowed_Emails_Bool_Exp>;
};


export type Subscription_RootAllowed_Emails_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootApplication_MetaArgs = {
  distinct_on: InputMaybe<Array<Application_Meta_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Application_Meta_Order_By>>;
  where: InputMaybe<Application_Meta_Bool_Exp>;
};


export type Subscription_RootApplication_Meta_AggregateArgs = {
  distinct_on: InputMaybe<Array<Application_Meta_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Application_Meta_Order_By>>;
  where: InputMaybe<Application_Meta_Bool_Exp>;
};


export type Subscription_RootApplication_Meta_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootBlockchainsArgs = {
  distinct_on: InputMaybe<Array<Blockchains_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Blockchains_Order_By>>;
  where: InputMaybe<Blockchains_Bool_Exp>;
};


export type Subscription_RootBlockchains_AggregateArgs = {
  distinct_on: InputMaybe<Array<Blockchains_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Blockchains_Order_By>>;
  where: InputMaybe<Blockchains_Bool_Exp>;
};


export type Subscription_RootBlockchains_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCoinsArgs = {
  distinct_on: InputMaybe<Array<Coins_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Coins_Order_By>>;
  where: InputMaybe<Coins_Bool_Exp>;
};


export type Subscription_RootCoins_AggregateArgs = {
  distinct_on: InputMaybe<Array<Coins_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Coins_Order_By>>;
  where: InputMaybe<Coins_Bool_Exp>;
};


export type Subscription_RootCoins_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCompaniesArgs = {
  distinct_on: InputMaybe<Array<Companies_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Companies_Order_By>>;
  where: InputMaybe<Companies_Bool_Exp>;
};


export type Subscription_RootCompanies_AggregateArgs = {
  distinct_on: InputMaybe<Array<Companies_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Companies_Order_By>>;
  where: InputMaybe<Companies_Bool_Exp>;
};


export type Subscription_RootCompanies_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootData_ActionsArgs = {
  distinct_on: InputMaybe<Array<Data_Actions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Actions_Order_By>>;
  where: InputMaybe<Data_Actions_Bool_Exp>;
};


export type Subscription_RootData_Actions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Data_Actions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Actions_Order_By>>;
  where: InputMaybe<Data_Actions_Bool_Exp>;
};


export type Subscription_RootData_Actions_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootData_FieldsArgs = {
  distinct_on: InputMaybe<Array<Data_Fields_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Fields_Order_By>>;
  where: InputMaybe<Data_Fields_Bool_Exp>;
};


export type Subscription_RootData_Fields_AggregateArgs = {
  distinct_on: InputMaybe<Array<Data_Fields_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Fields_Order_By>>;
  where: InputMaybe<Data_Fields_Bool_Exp>;
};


export type Subscription_RootData_Fields_By_PkArgs = {
  path: Scalars['String'];
};


export type Subscription_RootData_PartnersArgs = {
  distinct_on: InputMaybe<Array<Data_Partners_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Partners_Order_By>>;
  where: InputMaybe<Data_Partners_Bool_Exp>;
};


export type Subscription_RootData_Partners_AggregateArgs = {
  distinct_on: InputMaybe<Array<Data_Partners_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Partners_Order_By>>;
  where: InputMaybe<Data_Partners_Bool_Exp>;
};


export type Subscription_RootData_Partners_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootData_RawArgs = {
  distinct_on: InputMaybe<Array<Data_Raw_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Raw_Order_By>>;
  where: InputMaybe<Data_Raw_Bool_Exp>;
};


export type Subscription_RootData_Raw_AggregateArgs = {
  distinct_on: InputMaybe<Array<Data_Raw_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Raw_Order_By>>;
  where: InputMaybe<Data_Raw_Bool_Exp>;
};


export type Subscription_RootData_Raw_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootData_RunsArgs = {
  distinct_on: InputMaybe<Array<Data_Runs_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Runs_Order_By>>;
  where: InputMaybe<Data_Runs_Bool_Exp>;
};


export type Subscription_RootData_Runs_AggregateArgs = {
  distinct_on: InputMaybe<Array<Data_Runs_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Data_Runs_Order_By>>;
  where: InputMaybe<Data_Runs_Bool_Exp>;
};


export type Subscription_RootData_Runs_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootFollowsArgs = {
  distinct_on: InputMaybe<Array<Follows_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Order_By>>;
  where: InputMaybe<Follows_Bool_Exp>;
};


export type Subscription_RootFollows_AggregateArgs = {
  distinct_on: InputMaybe<Array<Follows_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Order_By>>;
  where: InputMaybe<Follows_Bool_Exp>;
};


export type Subscription_RootFollows_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFollows_CompaniesArgs = {
  distinct_on: InputMaybe<Array<Follows_Companies_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Companies_Order_By>>;
  where: InputMaybe<Follows_Companies_Bool_Exp>;
};


export type Subscription_RootFollows_Companies_AggregateArgs = {
  distinct_on: InputMaybe<Array<Follows_Companies_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Companies_Order_By>>;
  where: InputMaybe<Follows_Companies_Bool_Exp>;
};


export type Subscription_RootFollows_Vc_FirmsArgs = {
  distinct_on: InputMaybe<Array<Follows_Vc_Firms_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Vc_Firms_Order_By>>;
  where: InputMaybe<Follows_Vc_Firms_Bool_Exp>;
};


export type Subscription_RootFollows_Vc_Firms_AggregateArgs = {
  distinct_on: InputMaybe<Array<Follows_Vc_Firms_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Vc_Firms_Order_By>>;
  where: InputMaybe<Follows_Vc_Firms_Bool_Exp>;
};


export type Subscription_RootInvestment_RoundsArgs = {
  distinct_on: InputMaybe<Array<Investment_Rounds_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investment_Rounds_Order_By>>;
  where: InputMaybe<Investment_Rounds_Bool_Exp>;
};


export type Subscription_RootInvestment_Rounds_AggregateArgs = {
  distinct_on: InputMaybe<Array<Investment_Rounds_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investment_Rounds_Order_By>>;
  where: InputMaybe<Investment_Rounds_Bool_Exp>;
};


export type Subscription_RootInvestment_Rounds_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInvestmentsArgs = {
  distinct_on: InputMaybe<Array<Investments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investments_Order_By>>;
  where: InputMaybe<Investments_Bool_Exp>;
};


export type Subscription_RootInvestments_AggregateArgs = {
  distinct_on: InputMaybe<Array<Investments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investments_Order_By>>;
  where: InputMaybe<Investments_Bool_Exp>;
};


export type Subscription_RootInvestments_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInvestorsArgs = {
  distinct_on: InputMaybe<Array<Investors_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investors_Order_By>>;
  where: InputMaybe<Investors_Bool_Exp>;
};


export type Subscription_RootInvestors_AggregateArgs = {
  distinct_on: InputMaybe<Array<Investors_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investors_Order_By>>;
  where: InputMaybe<Investors_Bool_Exp>;
};


export type Subscription_RootInvestors_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootList_MembersArgs = {
  distinct_on: InputMaybe<Array<List_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<List_Members_Order_By>>;
  where: InputMaybe<List_Members_Bool_Exp>;
};


export type Subscription_RootList_Members_AggregateArgs = {
  distinct_on: InputMaybe<Array<List_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<List_Members_Order_By>>;
  where: InputMaybe<List_Members_Bool_Exp>;
};


export type Subscription_RootList_Members_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootListsArgs = {
  distinct_on: InputMaybe<Array<Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Lists_Order_By>>;
  where: InputMaybe<Lists_Bool_Exp>;
};


export type Subscription_RootLists_AggregateArgs = {
  distinct_on: InputMaybe<Array<Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Lists_Order_By>>;
  where: InputMaybe<Lists_Bool_Exp>;
};


export type Subscription_RootLists_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPeopleArgs = {
  distinct_on: InputMaybe<Array<People_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<People_Order_By>>;
  where: InputMaybe<People_Bool_Exp>;
};


export type Subscription_RootPeople_AggregateArgs = {
  distinct_on: InputMaybe<Array<People_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<People_Order_By>>;
  where: InputMaybe<People_Bool_Exp>;
};


export type Subscription_RootPeople_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTeam_MembersArgs = {
  distinct_on: InputMaybe<Array<Team_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Team_Members_Order_By>>;
  where: InputMaybe<Team_Members_Bool_Exp>;
};


export type Subscription_RootTeam_Members_AggregateArgs = {
  distinct_on: InputMaybe<Array<Team_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Team_Members_Order_By>>;
  where: InputMaybe<Team_Members_Bool_Exp>;
};


export type Subscription_RootTeam_Members_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVc_FirmsArgs = {
  distinct_on: InputMaybe<Array<Vc_Firms_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Vc_Firms_Order_By>>;
  where: InputMaybe<Vc_Firms_Bool_Exp>;
};


export type Subscription_RootVc_Firms_AggregateArgs = {
  distinct_on: InputMaybe<Array<Vc_Firms_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Vc_Firms_Order_By>>;
  where: InputMaybe<Vc_Firms_Bool_Exp>;
};


export type Subscription_RootVc_Firms_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootWaitlist_EmailsArgs = {
  distinct_on: InputMaybe<Array<Waitlist_Emails_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Waitlist_Emails_Order_By>>;
  where: InputMaybe<Waitlist_Emails_Bool_Exp>;
};


export type Subscription_RootWaitlist_Emails_AggregateArgs = {
  distinct_on: InputMaybe<Array<Waitlist_Emails_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Waitlist_Emails_Order_By>>;
  where: InputMaybe<Waitlist_Emails_Bool_Exp>;
};


export type Subscription_RootWaitlist_Emails_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "team_members" */
export type Team_Members = {
  __typename?: 'team_members';
  /** An object relationship */
  company: Maybe<Companies>;
  company_id: Maybe<Scalars['Int']>;
  end_date: Maybe<Scalars['date']>;
  external_id: Maybe<Scalars['String']>;
  founder: Maybe<Scalars['Boolean']>;
  function: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  person: Maybe<People>;
  person_id: Maybe<Scalars['Int']>;
  seniority: Maybe<Scalars['String']>;
  start_date: Maybe<Scalars['date']>;
  title: Maybe<Scalars['String']>;
};

/** aggregated selection of "team_members" */
export type Team_Members_Aggregate = {
  __typename?: 'team_members_aggregate';
  aggregate: Maybe<Team_Members_Aggregate_Fields>;
  nodes: Array<Team_Members>;
};

/** aggregate fields of "team_members" */
export type Team_Members_Aggregate_Fields = {
  __typename?: 'team_members_aggregate_fields';
  avg: Maybe<Team_Members_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Team_Members_Max_Fields>;
  min: Maybe<Team_Members_Min_Fields>;
  stddev: Maybe<Team_Members_Stddev_Fields>;
  stddev_pop: Maybe<Team_Members_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Team_Members_Stddev_Samp_Fields>;
  sum: Maybe<Team_Members_Sum_Fields>;
  var_pop: Maybe<Team_Members_Var_Pop_Fields>;
  var_samp: Maybe<Team_Members_Var_Samp_Fields>;
  variance: Maybe<Team_Members_Variance_Fields>;
};


/** aggregate fields of "team_members" */
export type Team_Members_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Team_Members_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team_members" */
export type Team_Members_Aggregate_Order_By = {
  avg: InputMaybe<Team_Members_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Team_Members_Max_Order_By>;
  min: InputMaybe<Team_Members_Min_Order_By>;
  stddev: InputMaybe<Team_Members_Stddev_Order_By>;
  stddev_pop: InputMaybe<Team_Members_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Team_Members_Stddev_Samp_Order_By>;
  sum: InputMaybe<Team_Members_Sum_Order_By>;
  var_pop: InputMaybe<Team_Members_Var_Pop_Order_By>;
  var_samp: InputMaybe<Team_Members_Var_Samp_Order_By>;
  variance: InputMaybe<Team_Members_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "team_members" */
export type Team_Members_Arr_Rel_Insert_Input = {
  data: Array<Team_Members_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Team_Members_On_Conflict>;
};

/** aggregate avg on columns */
export type Team_Members_Avg_Fields = {
  __typename?: 'team_members_avg_fields';
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "team_members" */
export type Team_Members_Avg_Order_By = {
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "team_members". All fields are combined with a logical 'AND'. */
export type Team_Members_Bool_Exp = {
  _and: InputMaybe<Array<Team_Members_Bool_Exp>>;
  _not: InputMaybe<Team_Members_Bool_Exp>;
  _or: InputMaybe<Array<Team_Members_Bool_Exp>>;
  company: InputMaybe<Companies_Bool_Exp>;
  company_id: InputMaybe<Int_Comparison_Exp>;
  end_date: InputMaybe<Date_Comparison_Exp>;
  external_id: InputMaybe<String_Comparison_Exp>;
  founder: InputMaybe<Boolean_Comparison_Exp>;
  function: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  person: InputMaybe<People_Bool_Exp>;
  person_id: InputMaybe<Int_Comparison_Exp>;
  seniority: InputMaybe<String_Comparison_Exp>;
  start_date: InputMaybe<Date_Comparison_Exp>;
  title: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "team_members" */
export enum Team_Members_Constraint {
  /** unique or primary key constraint */
  TeamMembersExternalIdKey = 'team_members_external_id_key',
  /** unique or primary key constraint */
  TeamMembersPkey = 'team_members_pkey'
}

/** input type for incrementing numeric columns in table "team_members" */
export type Team_Members_Inc_Input = {
  company_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
  person_id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "team_members" */
export type Team_Members_Insert_Input = {
  company: InputMaybe<Companies_Obj_Rel_Insert_Input>;
  company_id: InputMaybe<Scalars['Int']>;
  end_date: InputMaybe<Scalars['date']>;
  external_id: InputMaybe<Scalars['String']>;
  founder: InputMaybe<Scalars['Boolean']>;
  function: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  person: InputMaybe<People_Obj_Rel_Insert_Input>;
  person_id: InputMaybe<Scalars['Int']>;
  seniority: InputMaybe<Scalars['String']>;
  start_date: InputMaybe<Scalars['date']>;
  title: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Team_Members_Max_Fields = {
  __typename?: 'team_members_max_fields';
  company_id: Maybe<Scalars['Int']>;
  end_date: Maybe<Scalars['date']>;
  external_id: Maybe<Scalars['String']>;
  function: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  person_id: Maybe<Scalars['Int']>;
  seniority: Maybe<Scalars['String']>;
  start_date: Maybe<Scalars['date']>;
  title: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "team_members" */
export type Team_Members_Max_Order_By = {
  company_id: InputMaybe<Order_By>;
  end_date: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  function: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  seniority: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  title: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Members_Min_Fields = {
  __typename?: 'team_members_min_fields';
  company_id: Maybe<Scalars['Int']>;
  end_date: Maybe<Scalars['date']>;
  external_id: Maybe<Scalars['String']>;
  function: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  person_id: Maybe<Scalars['Int']>;
  seniority: Maybe<Scalars['String']>;
  start_date: Maybe<Scalars['date']>;
  title: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "team_members" */
export type Team_Members_Min_Order_By = {
  company_id: InputMaybe<Order_By>;
  end_date: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  function: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
  seniority: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  title: InputMaybe<Order_By>;
};

/** response of any mutation on the table "team_members" */
export type Team_Members_Mutation_Response = {
  __typename?: 'team_members_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Team_Members>;
};

/** on_conflict condition type for table "team_members" */
export type Team_Members_On_Conflict = {
  constraint: Team_Members_Constraint;
  update_columns: Array<Team_Members_Update_Column>;
  where: InputMaybe<Team_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "team_members". */
export type Team_Members_Order_By = {
  company: InputMaybe<Companies_Order_By>;
  company_id: InputMaybe<Order_By>;
  end_date: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  founder: InputMaybe<Order_By>;
  function: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person: InputMaybe<People_Order_By>;
  person_id: InputMaybe<Order_By>;
  seniority: InputMaybe<Order_By>;
  start_date: InputMaybe<Order_By>;
  title: InputMaybe<Order_By>;
};

/** primary key columns input for table: team_members */
export type Team_Members_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "team_members" */
export enum Team_Members_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Founder = 'founder',
  /** column name */
  Function = 'function',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  Seniority = 'seniority',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "team_members" */
export type Team_Members_Set_Input = {
  company_id: InputMaybe<Scalars['Int']>;
  end_date: InputMaybe<Scalars['date']>;
  external_id: InputMaybe<Scalars['String']>;
  founder: InputMaybe<Scalars['Boolean']>;
  function: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  person_id: InputMaybe<Scalars['Int']>;
  seniority: InputMaybe<Scalars['String']>;
  start_date: InputMaybe<Scalars['date']>;
  title: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Team_Members_Stddev_Fields = {
  __typename?: 'team_members_stddev_fields';
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "team_members" */
export type Team_Members_Stddev_Order_By = {
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Team_Members_Stddev_Pop_Fields = {
  __typename?: 'team_members_stddev_pop_fields';
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "team_members" */
export type Team_Members_Stddev_Pop_Order_By = {
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Team_Members_Stddev_Samp_Fields = {
  __typename?: 'team_members_stddev_samp_fields';
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "team_members" */
export type Team_Members_Stddev_Samp_Order_By = {
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Team_Members_Sum_Fields = {
  __typename?: 'team_members_sum_fields';
  company_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  person_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "team_members" */
export type Team_Members_Sum_Order_By = {
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
};

/** update columns of table "team_members" */
export enum Team_Members_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Founder = 'founder',
  /** column name */
  Function = 'function',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  Seniority = 'seniority',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Team_Members_Var_Pop_Fields = {
  __typename?: 'team_members_var_pop_fields';
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "team_members" */
export type Team_Members_Var_Pop_Order_By = {
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Team_Members_Var_Samp_Fields = {
  __typename?: 'team_members_var_samp_fields';
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "team_members" */
export type Team_Members_Var_Samp_Order_By = {
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Team_Members_Variance_Fields = {
  __typename?: 'team_members_variance_fields';
  company_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  person_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "team_members" */
export type Team_Members_Variance_Order_By = {
  company_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  person_id: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq: InputMaybe<Scalars['timestamp']>;
  _gt: InputMaybe<Scalars['timestamp']>;
  _gte: InputMaybe<Scalars['timestamp']>;
  _in: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['timestamp']>;
  _lte: InputMaybe<Scalars['timestamp']>;
  _neq: InputMaybe<Scalars['timestamp']>;
  _nin: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq: InputMaybe<Scalars['timestamptz']>;
  _gt: InputMaybe<Scalars['timestamptz']>;
  _gte: InputMaybe<Scalars['timestamptz']>;
  _in: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['timestamptz']>;
  _lte: InputMaybe<Scalars['timestamptz']>;
  _neq: InputMaybe<Scalars['timestamptz']>;
  _nin: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  display_name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  external_id: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  is_auth0_verified: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  list_members: Array<List_Members>;
  /** An aggregate relationship */
  list_members_aggregate: List_Members_Aggregate;
  role: Maybe<Scalars['String']>;
};


/** columns and relationships of "users" */
export type UsersList_MembersArgs = {
  distinct_on: InputMaybe<Array<List_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<List_Members_Order_By>>;
  where: InputMaybe<List_Members_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersList_Members_AggregateArgs = {
  distinct_on: InputMaybe<Array<List_Members_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<List_Members_Order_By>>;
  where: InputMaybe<List_Members_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Users_Max_Fields>;
  min: Maybe<Users_Min_Fields>;
  stddev: Maybe<Users_Stddev_Fields>;
  stddev_pop: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Users_Stddev_Samp_Fields>;
  sum: Maybe<Users_Sum_Fields>;
  var_pop: Maybe<Users_Var_Pop_Fields>;
  var_samp: Maybe<Users_Var_Samp_Fields>;
  variance: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Users_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and: InputMaybe<Array<Users_Bool_Exp>>;
  _not: InputMaybe<Users_Bool_Exp>;
  _or: InputMaybe<Array<Users_Bool_Exp>>;
  display_name: InputMaybe<String_Comparison_Exp>;
  email: InputMaybe<String_Comparison_Exp>;
  external_id: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  is_auth0_verified: InputMaybe<Boolean_Comparison_Exp>;
  list_members: InputMaybe<List_Members_Bool_Exp>;
  role: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  display_name: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  external_id: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  is_auth0_verified: InputMaybe<Scalars['Boolean']>;
  list_members: InputMaybe<List_Members_Arr_Rel_Insert_Input>;
  role: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  display_name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  external_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  role: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  display_name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  external_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  role: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  display_name: InputMaybe<Order_By>;
  email: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  is_auth0_verified: InputMaybe<Order_By>;
  list_members_aggregate: InputMaybe<List_Members_Aggregate_Order_By>;
  role: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsAuth0Verified = 'is_auth0_verified',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  display_name: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  external_id: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  is_auth0_verified: InputMaybe<Scalars['Boolean']>;
  role: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsAuth0Verified = 'is_auth0_verified',
  /** column name */
  Role = 'role'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** columns and relationships of "vc_firms" */
export type Vc_Firms = {
  __typename?: 'vc_firms';
  created_at: Maybe<Scalars['timestamptz']>;
  external_id: Maybe<Scalars['String']>;
  /** An array relationship */
  follows: Array<Follows_Vc_Firms>;
  /** An aggregate relationship */
  follows_aggregate: Follows_Vc_Firms_Aggregate;
  id: Scalars['Int'];
  /** An array relationship */
  investments: Array<Investments>;
  /** An aggregate relationship */
  investments_aggregate: Investments_Aggregate;
  /** An array relationship */
  investors: Array<Investors>;
  /** An aggregate relationship */
  investors_aggregate: Investors_Aggregate;
  /** A computed field, executes function "vc_firms_latest_investments" */
  latest_investments: Maybe<Scalars['String']>;
  linkedin: Maybe<Scalars['String']>;
  location: Maybe<Scalars['String']>;
  logo: Maybe<Scalars['jsonb']>;
  name: Maybe<Scalars['String']>;
  /** A computed field, executes function "vc_firms_num_of_investments" */
  num_of_investments: Maybe<Scalars['Int']>;
  overview: Maybe<Scalars['String']>;
  sentiment: Maybe<Scalars['jsonb']>;
  slug: Maybe<Scalars['String']>;
  status: Scalars['String'];
  tags: Maybe<Scalars['jsonb']>;
  twitter: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  website: Maybe<Scalars['String']>;
  year_founded: Maybe<Scalars['String']>;
};


/** columns and relationships of "vc_firms" */
export type Vc_FirmsFollowsArgs = {
  distinct_on: InputMaybe<Array<Follows_Vc_Firms_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Vc_Firms_Order_By>>;
  where: InputMaybe<Follows_Vc_Firms_Bool_Exp>;
};


/** columns and relationships of "vc_firms" */
export type Vc_FirmsFollows_AggregateArgs = {
  distinct_on: InputMaybe<Array<Follows_Vc_Firms_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Follows_Vc_Firms_Order_By>>;
  where: InputMaybe<Follows_Vc_Firms_Bool_Exp>;
};


/** columns and relationships of "vc_firms" */
export type Vc_FirmsInvestmentsArgs = {
  distinct_on: InputMaybe<Array<Investments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investments_Order_By>>;
  where: InputMaybe<Investments_Bool_Exp>;
};


/** columns and relationships of "vc_firms" */
export type Vc_FirmsInvestments_AggregateArgs = {
  distinct_on: InputMaybe<Array<Investments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investments_Order_By>>;
  where: InputMaybe<Investments_Bool_Exp>;
};


/** columns and relationships of "vc_firms" */
export type Vc_FirmsInvestorsArgs = {
  distinct_on: InputMaybe<Array<Investors_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investors_Order_By>>;
  where: InputMaybe<Investors_Bool_Exp>;
};


/** columns and relationships of "vc_firms" */
export type Vc_FirmsInvestors_AggregateArgs = {
  distinct_on: InputMaybe<Array<Investors_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Investors_Order_By>>;
  where: InputMaybe<Investors_Bool_Exp>;
};


/** columns and relationships of "vc_firms" */
export type Vc_FirmsLogoArgs = {
  path: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "vc_firms" */
export type Vc_FirmsSentimentArgs = {
  path: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "vc_firms" */
export type Vc_FirmsTagsArgs = {
  path: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "vc_firms" */
export type Vc_Firms_Aggregate = {
  __typename?: 'vc_firms_aggregate';
  aggregate: Maybe<Vc_Firms_Aggregate_Fields>;
  nodes: Array<Vc_Firms>;
};

/** aggregate fields of "vc_firms" */
export type Vc_Firms_Aggregate_Fields = {
  __typename?: 'vc_firms_aggregate_fields';
  avg: Maybe<Vc_Firms_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Vc_Firms_Max_Fields>;
  min: Maybe<Vc_Firms_Min_Fields>;
  stddev: Maybe<Vc_Firms_Stddev_Fields>;
  stddev_pop: Maybe<Vc_Firms_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Vc_Firms_Stddev_Samp_Fields>;
  sum: Maybe<Vc_Firms_Sum_Fields>;
  var_pop: Maybe<Vc_Firms_Var_Pop_Fields>;
  var_samp: Maybe<Vc_Firms_Var_Samp_Fields>;
  variance: Maybe<Vc_Firms_Variance_Fields>;
};


/** aggregate fields of "vc_firms" */
export type Vc_Firms_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Vc_Firms_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Vc_Firms_Append_Input = {
  logo: InputMaybe<Scalars['jsonb']>;
  sentiment: InputMaybe<Scalars['jsonb']>;
  tags: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Vc_Firms_Avg_Fields = {
  __typename?: 'vc_firms_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vc_firms". All fields are combined with a logical 'AND'. */
export type Vc_Firms_Bool_Exp = {
  _and: InputMaybe<Array<Vc_Firms_Bool_Exp>>;
  _not: InputMaybe<Vc_Firms_Bool_Exp>;
  _or: InputMaybe<Array<Vc_Firms_Bool_Exp>>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  external_id: InputMaybe<String_Comparison_Exp>;
  follows: InputMaybe<Follows_Vc_Firms_Bool_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  investments: InputMaybe<Investments_Bool_Exp>;
  investors: InputMaybe<Investors_Bool_Exp>;
  latest_investments: InputMaybe<String_Comparison_Exp>;
  linkedin: InputMaybe<String_Comparison_Exp>;
  location: InputMaybe<String_Comparison_Exp>;
  logo: InputMaybe<Jsonb_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  num_of_investments: InputMaybe<Int_Comparison_Exp>;
  overview: InputMaybe<String_Comparison_Exp>;
  sentiment: InputMaybe<Jsonb_Comparison_Exp>;
  slug: InputMaybe<String_Comparison_Exp>;
  status: InputMaybe<String_Comparison_Exp>;
  tags: InputMaybe<Jsonb_Comparison_Exp>;
  twitter: InputMaybe<String_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
  website: InputMaybe<String_Comparison_Exp>;
  year_founded: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "vc_firms" */
export enum Vc_Firms_Constraint {
  /** unique or primary key constraint */
  VcFirmsExternalIdKey = 'vc_firms_external_id_key',
  /** unique or primary key constraint */
  VcFirmsPkey = 'vc_firms_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Vc_Firms_Delete_At_Path_Input = {
  logo: InputMaybe<Array<Scalars['String']>>;
  sentiment: InputMaybe<Array<Scalars['String']>>;
  tags: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Vc_Firms_Delete_Elem_Input = {
  logo: InputMaybe<Scalars['Int']>;
  sentiment: InputMaybe<Scalars['Int']>;
  tags: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Vc_Firms_Delete_Key_Input = {
  logo: InputMaybe<Scalars['String']>;
  sentiment: InputMaybe<Scalars['String']>;
  tags: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "vc_firms" */
export type Vc_Firms_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vc_firms" */
export type Vc_Firms_Insert_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  external_id: InputMaybe<Scalars['String']>;
  follows: InputMaybe<Follows_Vc_Firms_Arr_Rel_Insert_Input>;
  id: InputMaybe<Scalars['Int']>;
  investments: InputMaybe<Investments_Arr_Rel_Insert_Input>;
  investors: InputMaybe<Investors_Arr_Rel_Insert_Input>;
  linkedin: InputMaybe<Scalars['String']>;
  location: InputMaybe<Scalars['String']>;
  logo: InputMaybe<Scalars['jsonb']>;
  name: InputMaybe<Scalars['String']>;
  overview: InputMaybe<Scalars['String']>;
  sentiment: InputMaybe<Scalars['jsonb']>;
  slug: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
  tags: InputMaybe<Scalars['jsonb']>;
  twitter: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  website: InputMaybe<Scalars['String']>;
  year_founded: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Vc_Firms_Max_Fields = {
  __typename?: 'vc_firms_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  external_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  linkedin: Maybe<Scalars['String']>;
  location: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  overview: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  twitter: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  website: Maybe<Scalars['String']>;
  year_founded: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Vc_Firms_Min_Fields = {
  __typename?: 'vc_firms_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  external_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  linkedin: Maybe<Scalars['String']>;
  location: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  overview: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  twitter: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  website: Maybe<Scalars['String']>;
  year_founded: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "vc_firms" */
export type Vc_Firms_Mutation_Response = {
  __typename?: 'vc_firms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vc_Firms>;
};

/** input type for inserting object relation for remote table "vc_firms" */
export type Vc_Firms_Obj_Rel_Insert_Input = {
  data: Vc_Firms_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Vc_Firms_On_Conflict>;
};

/** on_conflict condition type for table "vc_firms" */
export type Vc_Firms_On_Conflict = {
  constraint: Vc_Firms_Constraint;
  update_columns: Array<Vc_Firms_Update_Column>;
  where: InputMaybe<Vc_Firms_Bool_Exp>;
};

/** Ordering options when selecting data from "vc_firms". */
export type Vc_Firms_Order_By = {
  created_at: InputMaybe<Order_By>;
  external_id: InputMaybe<Order_By>;
  follows_aggregate: InputMaybe<Follows_Vc_Firms_Aggregate_Order_By>;
  id: InputMaybe<Order_By>;
  investments_aggregate: InputMaybe<Investments_Aggregate_Order_By>;
  investors_aggregate: InputMaybe<Investors_Aggregate_Order_By>;
  latest_investments: InputMaybe<Order_By>;
  linkedin: InputMaybe<Order_By>;
  location: InputMaybe<Order_By>;
  logo: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  num_of_investments: InputMaybe<Order_By>;
  overview: InputMaybe<Order_By>;
  sentiment: InputMaybe<Order_By>;
  slug: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  tags: InputMaybe<Order_By>;
  twitter: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  website: InputMaybe<Order_By>;
  year_founded: InputMaybe<Order_By>;
};

/** primary key columns input for table: vc_firms */
export type Vc_Firms_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Vc_Firms_Prepend_Input = {
  logo: InputMaybe<Scalars['jsonb']>;
  sentiment: InputMaybe<Scalars['jsonb']>;
  tags: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "vc_firms" */
export enum Vc_Firms_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  Linkedin = 'linkedin',
  /** column name */
  Location = 'location',
  /** column name */
  Logo = 'logo',
  /** column name */
  Name = 'name',
  /** column name */
  Overview = 'overview',
  /** column name */
  Sentiment = 'sentiment',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website',
  /** column name */
  YearFounded = 'year_founded'
}

/** input type for updating data in table "vc_firms" */
export type Vc_Firms_Set_Input = {
  created_at: InputMaybe<Scalars['timestamptz']>;
  external_id: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  linkedin: InputMaybe<Scalars['String']>;
  location: InputMaybe<Scalars['String']>;
  logo: InputMaybe<Scalars['jsonb']>;
  name: InputMaybe<Scalars['String']>;
  overview: InputMaybe<Scalars['String']>;
  sentiment: InputMaybe<Scalars['jsonb']>;
  slug: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
  tags: InputMaybe<Scalars['jsonb']>;
  twitter: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  website: InputMaybe<Scalars['String']>;
  year_founded: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Vc_Firms_Stddev_Fields = {
  __typename?: 'vc_firms_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vc_Firms_Stddev_Pop_Fields = {
  __typename?: 'vc_firms_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vc_Firms_Stddev_Samp_Fields = {
  __typename?: 'vc_firms_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Vc_Firms_Sum_Fields = {
  __typename?: 'vc_firms_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "vc_firms" */
export enum Vc_Firms_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  Linkedin = 'linkedin',
  /** column name */
  Location = 'location',
  /** column name */
  Logo = 'logo',
  /** column name */
  Name = 'name',
  /** column name */
  Overview = 'overview',
  /** column name */
  Sentiment = 'sentiment',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website',
  /** column name */
  YearFounded = 'year_founded'
}

/** aggregate var_pop on columns */
export type Vc_Firms_Var_Pop_Fields = {
  __typename?: 'vc_firms_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vc_Firms_Var_Samp_Fields = {
  __typename?: 'vc_firms_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vc_Firms_Variance_Fields = {
  __typename?: 'vc_firms_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** List of waitlist emailIds */
export type Waitlist_Emails = {
  __typename?: 'waitlist_emails';
  created_at: Scalars['date'];
  email: Scalars['String'];
  id: Scalars['Int'];
  updated_at: Scalars['date'];
};

/** aggregated selection of "waitlist_emails" */
export type Waitlist_Emails_Aggregate = {
  __typename?: 'waitlist_emails_aggregate';
  aggregate: Maybe<Waitlist_Emails_Aggregate_Fields>;
  nodes: Array<Waitlist_Emails>;
};

/** aggregate fields of "waitlist_emails" */
export type Waitlist_Emails_Aggregate_Fields = {
  __typename?: 'waitlist_emails_aggregate_fields';
  avg: Maybe<Waitlist_Emails_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Waitlist_Emails_Max_Fields>;
  min: Maybe<Waitlist_Emails_Min_Fields>;
  stddev: Maybe<Waitlist_Emails_Stddev_Fields>;
  stddev_pop: Maybe<Waitlist_Emails_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Waitlist_Emails_Stddev_Samp_Fields>;
  sum: Maybe<Waitlist_Emails_Sum_Fields>;
  var_pop: Maybe<Waitlist_Emails_Var_Pop_Fields>;
  var_samp: Maybe<Waitlist_Emails_Var_Samp_Fields>;
  variance: Maybe<Waitlist_Emails_Variance_Fields>;
};


/** aggregate fields of "waitlist_emails" */
export type Waitlist_Emails_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Waitlist_Emails_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Waitlist_Emails_Avg_Fields = {
  __typename?: 'waitlist_emails_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "waitlist_emails". All fields are combined with a logical 'AND'. */
export type Waitlist_Emails_Bool_Exp = {
  _and: InputMaybe<Array<Waitlist_Emails_Bool_Exp>>;
  _not: InputMaybe<Waitlist_Emails_Bool_Exp>;
  _or: InputMaybe<Array<Waitlist_Emails_Bool_Exp>>;
  created_at: InputMaybe<Date_Comparison_Exp>;
  email: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  updated_at: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "waitlist_emails" */
export enum Waitlist_Emails_Constraint {
  /** unique or primary key constraint */
  WaitlistEmailsEmailKey = 'waitlist_emails_email_key',
  /** unique or primary key constraint */
  WaitlistEmailsPkey = 'waitlist_emails_pkey'
}

/** input type for incrementing numeric columns in table "waitlist_emails" */
export type Waitlist_Emails_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "waitlist_emails" */
export type Waitlist_Emails_Insert_Input = {
  created_at: InputMaybe<Scalars['date']>;
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  updated_at: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Waitlist_Emails_Max_Fields = {
  __typename?: 'waitlist_emails_max_fields';
  created_at: Maybe<Scalars['date']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['date']>;
};

/** aggregate min on columns */
export type Waitlist_Emails_Min_Fields = {
  __typename?: 'waitlist_emails_min_fields';
  created_at: Maybe<Scalars['date']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['date']>;
};

/** response of any mutation on the table "waitlist_emails" */
export type Waitlist_Emails_Mutation_Response = {
  __typename?: 'waitlist_emails_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Waitlist_Emails>;
};

/** on_conflict condition type for table "waitlist_emails" */
export type Waitlist_Emails_On_Conflict = {
  constraint: Waitlist_Emails_Constraint;
  update_columns: Array<Waitlist_Emails_Update_Column>;
  where: InputMaybe<Waitlist_Emails_Bool_Exp>;
};

/** Ordering options when selecting data from "waitlist_emails". */
export type Waitlist_Emails_Order_By = {
  created_at: InputMaybe<Order_By>;
  email: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
};

/** primary key columns input for table: waitlist_emails */
export type Waitlist_Emails_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "waitlist_emails" */
export enum Waitlist_Emails_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "waitlist_emails" */
export type Waitlist_Emails_Set_Input = {
  created_at: InputMaybe<Scalars['date']>;
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  updated_at: InputMaybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Waitlist_Emails_Stddev_Fields = {
  __typename?: 'waitlist_emails_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Waitlist_Emails_Stddev_Pop_Fields = {
  __typename?: 'waitlist_emails_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Waitlist_Emails_Stddev_Samp_Fields = {
  __typename?: 'waitlist_emails_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Waitlist_Emails_Sum_Fields = {
  __typename?: 'waitlist_emails_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "waitlist_emails" */
export enum Waitlist_Emails_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Waitlist_Emails_Var_Pop_Fields = {
  __typename?: 'waitlist_emails_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Waitlist_Emails_Var_Samp_Fields = {
  __typename?: 'waitlist_emails_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Waitlist_Emails_Variance_Fields = {
  __typename?: 'waitlist_emails_variance_fields';
  id: Maybe<Scalars['Float']>;
};

export type GetCompanyQueryVariables = Exact<{
  slug: Scalars['String'];
  current_user?: InputMaybe<Scalars['Int']>;
}>;


export type GetCompanyQuery = { __typename?: 'query_root', companies: Array<{ __typename?: 'companies', id: number, name: string | null, slug: string | null, logo: any | null, layer: string | null, overview: string | null, investor_amount: any | null, white_paper: string | null, total_employees: any | null, year_founded: string | null, website: string | null, market_verified: string | null, company_linkedin: string | null, careers_page: string | null, github: string | null, velocity_linkedin: string | null, velocity_token: string | null, tags: any | null, date_added: any | null, ico_start: any | null, ico_end: any | null, audit_file: string | null, sentiment: any | null, twitter: string | null, location: string | null, discord: string | null, glassdoor: string | null, coin: { __typename?: 'coins', id: number, ticker: string } | null, teamMembers: Array<{ __typename?: 'team_members', id: number, function: string | null, start_date: any | null, end_date: any | null, founder: boolean | null, person: { __typename?: 'people', id: number, slug: string | null, name: string | null, picture: any | null, linkedin: string | null, personal_email: string | null, work_email: string | null } | null }>, investment_rounds: Array<{ __typename?: 'investment_rounds', id: number, round_date: string | null, round: string | null, amount: any | null, investments: Array<{ __typename?: 'investments', id: number, person: { __typename?: 'people', id: number, slug: string | null, name: string | null, picture: any | null } | null, vc_firm: { __typename?: 'vc_firms', id: number, slug: string | null, name: string | null, logo: any | null } | null }> }>, follows: Array<{ __typename?: 'follows_companies', list: { __typename?: 'lists', name: string } | null }> }> };

export type GetCompaniesQueryVariables = Exact<{
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  current_user?: InputMaybe<Scalars['Int']>;
  where: Companies_Bool_Exp;
}>;


export type GetCompaniesQuery = { __typename?: 'query_root', companies: Array<{ __typename?: 'companies', id: number, name: string | null, slug: string | null, layer: string | null, sentiment: any | null, investor_amount: any | null, total_employees: any | null, logo: any | null, overview: string | null, github: string | null, company_linkedin: string | null, market_verified: string | null, velocity_linkedin: string | null, velocity_token: string | null, coin: { __typename?: 'coins', ticker: string } | null, follows: Array<{ __typename?: 'follows_companies', list: { __typename?: 'lists', name: string } | null }> }> };

export type GetCompaniesRecentQueryVariables = Exact<{
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  where: Companies_Bool_Exp;
  current_user?: InputMaybe<Scalars['Int']>;
}>;


export type GetCompaniesRecentQuery = { __typename?: 'query_root', companies: Array<{ __typename?: 'companies', id: number, name: string | null, slug: string | null, layer: string | null, logo: any | null, overview: string | null, total_employees: any | null, investor_amount: any | null, date_added: any | null, sentiment: any | null, follows: Array<{ __typename?: 'follows_companies', list: { __typename?: 'lists', name: string } | null }> }> };

export type GetCompaniesPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesPathsQuery = { __typename?: 'query_root', companies: Array<{ __typename?: 'companies', id: number, name: string | null, slug: string | null }> };

export type GetRelevantCompaniesQueryVariables = Exact<{
  where: Companies_Bool_Exp;
  current_user?: InputMaybe<Scalars['Int']>;
}>;


export type GetRelevantCompaniesQuery = { __typename?: 'query_root', companies: Array<{ __typename?: 'companies', id: number, logo: any | null, name: string | null, slug: string | null, sentiment: any | null, follows: Array<{ __typename?: 'follows_companies', list: { __typename?: 'lists', name: string } | null }> }> };

export type GetFollowsListsStaticPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFollowsListsStaticPathsQuery = { __typename?: 'query_root', follows: Array<{ __typename?: 'follows', id: number, list_id: number | null }> };

export type GetCompaniesByListIdQueryVariables = Exact<{
  list_id?: InputMaybe<Scalars['Int']>;
}>;


export type GetCompaniesByListIdQuery = { __typename?: 'query_root', follows_companies: Array<{ __typename?: 'follows_companies', id: number | null, company: { __typename?: 'companies', id: number, name: string | null, logo: any | null, sentiment: any | null, location: string | null, tags: any | null, slug: string | null, coin: { __typename?: 'coins', ticker: string, name: string } | null, teamMembers: Array<{ __typename?: 'team_members', id: number }>, investment_rounds: Array<{ __typename?: 'investment_rounds', amount: any | null }> } | null }> };

export type GetVcFirmsByListIdQueryVariables = Exact<{
  list_id?: InputMaybe<Scalars['Int']>;
}>;


export type GetVcFirmsByListIdQuery = { __typename?: 'query_root', follows_vc_firms: Array<{ __typename?: 'follows_vc_firms', id: number | null, vc_firm: { __typename?: 'vc_firms', id: number, name: string | null, num_of_investments: number | null, latest_investments: string | null, sentiment: any | null, logo: any | null, slug: string | null } | null }> };

export type GetListsByUserQueryVariables = Exact<{
  current_user: InputMaybe<Scalars['Int']>;
}>;


export type GetListsByUserQuery = { __typename?: 'query_root', lists: Array<{ __typename?: 'lists', id: number, name: string, total_no_of_resources: number | null }> };

export type GetPersonQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPersonQuery = { __typename?: 'query_root', people: Array<{ __typename?: 'people', id: number, name: string | null, slug: string | null, picture: any | null, type: string | null, personal_email: string | null, work_email: string | null, linkedin: string | null, team_members: Array<{ __typename?: 'team_members', company: { __typename?: 'companies', id: number, slug: string | null, name: string | null, logo: any | null, overview: string | null } | null }>, investments: Array<{ __typename?: 'investments', investment_round: { __typename?: 'investment_rounds', id: number, round_date: string | null, round: string | null, amount: any | null, company: { __typename?: 'companies', id: number, slug: string | null, name: string | null, logo: any | null } | null } | null }> }> };

export type GetPersonsPathQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonsPathQuery = { __typename?: 'query_root', people: Array<{ __typename?: 'people', id: number, name: string | null, slug: string | null }> };

export type GetVcFirmQueryVariables = Exact<{
  slug: Scalars['String'];
  current_user: InputMaybe<Scalars['Int']>;
}>;


export type GetVcFirmQuery = { __typename?: 'query_root', vc_firms: Array<{ __typename?: 'vc_firms', id: number, name: string | null, slug: string | null, logo: any | null, website: string | null, linkedin: string | null, sentiment: any | null, tags: any | null, overview: string | null, year_founded: string | null, location: string | null, twitter: string | null, investors: Array<{ __typename?: 'investors', id: number, function: string | null, start_date: any | null, end_date: any | null, seniority: string | null, title: string | null, person: { __typename?: 'people', id: number, slug: string | null, name: string | null, picture: any | null, linkedin: string | null, personal_email: string | null, work_email: string | null } | null }>, investments: Array<{ __typename?: 'investments', investment_round: { __typename?: 'investment_rounds', id: number, round_date: string | null, round: string | null, amount: any | null, company: { __typename?: 'companies', id: number, slug: string | null, name: string | null, logo: any | null } | null } | null }>, follows: Array<{ __typename?: 'follows_vc_firms', list: { __typename?: 'lists', name: string } | null }> }> };

export type GetVcFirmsQueryVariables = Exact<{
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  where: Vc_Firms_Bool_Exp;
  current_user: InputMaybe<Scalars['Int']>;
}>;


export type GetVcFirmsQuery = { __typename?: 'query_root', vc_firms: Array<{ __typename?: 'vc_firms', id: number, name: string | null, slug: string | null, logo: any | null, num_of_investments: number | null, sentiment: any | null, overview: string | null, follows: Array<{ __typename?: 'follows_vc_firms', list: { __typename?: 'lists', name: string } | null }> }> };

export type GetVcFirmsRecentInvestmentsQueryVariables = Exact<{
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  where: Vc_Firms_Bool_Exp;
  current_user: InputMaybe<Scalars['Int']>;
}>;


export type GetVcFirmsRecentInvestmentsQuery = { __typename?: 'query_root', vc_firms: Array<{ __typename?: 'vc_firms', id: number, name: string | null, slug: string | null, logo: any | null, latest_investments: string | null, num_of_investments: number | null, sentiment: any | null, overview: string | null, follows: Array<{ __typename?: 'follows_vc_firms', list: { __typename?: 'lists', name: string } | null }> }> };

export type GetVcFirmsPathQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVcFirmsPathQuery = { __typename?: 'query_root', vc_firms: Array<{ __typename?: 'vc_firms', id: number, name: string | null, slug: string | null }> };

export type GetRelevantVcFirmsQueryVariables = Exact<{
  where: Vc_Firms_Bool_Exp;
  current_user: InputMaybe<Scalars['Int']>;
}>;


export type GetRelevantVcFirmsQuery = { __typename?: 'query_root', vc_firms: Array<{ __typename?: 'vc_firms', id: number, logo: any | null, name: string | null, slug: string | null, sentiment: any | null, follows: Array<{ __typename?: 'follows_vc_firms', list: { __typename?: 'lists', name: string } | null }> }> };


export const GetCompanyDocument = `
    query GetCompany($slug: String!, $current_user: Int = 0) {
  companies(where: {slug: {_eq: $slug}}) {
    id
    name
    coin {
      id
      ticker
    }
    slug
    logo
    layer
    overview
    investor_amount
    white_paper
    total_employees
    year_founded
    website
    market_verified
    company_linkedin
    careers_page
    github
    velocity_linkedin
    velocity_token
    tags
    date_added
    ico_start
    ico_end
    audit_file
    sentiment
    twitter
    location
    discord
    glassdoor
    teamMembers {
      id
      person {
        id
        slug
        name
        picture
        linkedin
        personal_email
        work_email
      }
      function
      start_date
      end_date
      founder
    }
    investment_rounds {
      id
      round_date
      round
      amount
      investments {
        id
        person {
          id
          slug
          name
          picture
        }
        vc_firm {
          id
          slug
          name
          logo
        }
      }
    }
    follows(where: {created_by_user_id: {_eq: $current_user}}) {
      list {
        name
      }
    }
  }
}
    `;
export const useGetCompanyQuery = <
      TData = GetCompanyQuery,
      TError = Error
    >(
      variables: GetCompanyQueryVariables,
      options?: UseQueryOptions<GetCompanyQuery, TError, TData>
    ) =>
    useQuery<GetCompanyQuery, TError, TData>(
      ['GetCompany', variables],
      fetcher<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, variables),
      options
    );
useGetCompanyQuery.document = GetCompanyDocument;


useGetCompanyQuery.getKey = (variables: GetCompanyQueryVariables) => ['GetCompany', variables];
;

useGetCompanyQuery.fetcher = (variables: GetCompanyQueryVariables, options?: RequestInit['headers']) => fetcher<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, variables, options);
export const GetCompaniesDocument = `
    query GetCompanies($limit: Int, $offset: Int, $current_user: Int = 0, $where: companies_bool_exp!) {
  companies(where: $where, order_by: {slug: asc}, limit: $limit, offset: $offset) {
    id
    name
    slug
    layer
    coin {
      ticker
    }
    sentiment
    investor_amount
    total_employees
    logo
    overview
    github
    company_linkedin
    market_verified
    velocity_linkedin
    velocity_token
    follows(where: {created_by_user_id: {_eq: $current_user}}) {
      list {
        name
      }
    }
  }
}
    `;
export const useGetCompaniesQuery = <
      TData = GetCompaniesQuery,
      TError = Error
    >(
      variables: GetCompaniesQueryVariables,
      options?: UseQueryOptions<GetCompaniesQuery, TError, TData>
    ) =>
    useQuery<GetCompaniesQuery, TError, TData>(
      ['GetCompanies', variables],
      fetcher<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, variables),
      options
    );
useGetCompaniesQuery.document = GetCompaniesDocument;


useGetCompaniesQuery.getKey = (variables: GetCompaniesQueryVariables) => ['GetCompanies', variables];
;

useGetCompaniesQuery.fetcher = (variables: GetCompaniesQueryVariables, options?: RequestInit['headers']) => fetcher<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, variables, options);
export const GetCompaniesRecentDocument = `
    query GetCompaniesRecent($limit: Int, $offset: Int, $where: companies_bool_exp!, $current_user: Int = 0) {
  companies(
    where: $where
    order_by: {date_added: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    name
    slug
    layer
    logo
    overview
    total_employees
    investor_amount
    date_added
    sentiment
    follows(where: {created_by_user_id: {_eq: $current_user}}) {
      list {
        name
      }
    }
  }
}
    `;
export const useGetCompaniesRecentQuery = <
      TData = GetCompaniesRecentQuery,
      TError = Error
    >(
      variables: GetCompaniesRecentQueryVariables,
      options?: UseQueryOptions<GetCompaniesRecentQuery, TError, TData>
    ) =>
    useQuery<GetCompaniesRecentQuery, TError, TData>(
      ['GetCompaniesRecent', variables],
      fetcher<GetCompaniesRecentQuery, GetCompaniesRecentQueryVariables>(GetCompaniesRecentDocument, variables),
      options
    );
useGetCompaniesRecentQuery.document = GetCompaniesRecentDocument;


useGetCompaniesRecentQuery.getKey = (variables: GetCompaniesRecentQueryVariables) => ['GetCompaniesRecent', variables];
;

useGetCompaniesRecentQuery.fetcher = (variables: GetCompaniesRecentQueryVariables, options?: RequestInit['headers']) => fetcher<GetCompaniesRecentQuery, GetCompaniesRecentQueryVariables>(GetCompaniesRecentDocument, variables, options);
export const GetCompaniesPathsDocument = `
    query GetCompaniesPaths {
  companies(where: {slug: {_neq: ""}}, order_by: {slug: asc}) {
    id
    name
    slug
  }
}
    `;
export const useGetCompaniesPathsQuery = <
      TData = GetCompaniesPathsQuery,
      TError = Error
    >(
      variables?: GetCompaniesPathsQueryVariables,
      options?: UseQueryOptions<GetCompaniesPathsQuery, TError, TData>
    ) =>
    useQuery<GetCompaniesPathsQuery, TError, TData>(
      variables === undefined ? ['GetCompaniesPaths'] : ['GetCompaniesPaths', variables],
      fetcher<GetCompaniesPathsQuery, GetCompaniesPathsQueryVariables>(GetCompaniesPathsDocument, variables),
      options
    );
useGetCompaniesPathsQuery.document = GetCompaniesPathsDocument;


useGetCompaniesPathsQuery.getKey = (variables?: GetCompaniesPathsQueryVariables) => variables === undefined ? ['GetCompaniesPaths'] : ['GetCompaniesPaths', variables];
;

useGetCompaniesPathsQuery.fetcher = (variables?: GetCompaniesPathsQueryVariables, options?: RequestInit['headers']) => fetcher<GetCompaniesPathsQuery, GetCompaniesPathsQueryVariables>(GetCompaniesPathsDocument, variables, options);
export const GetRelevantCompaniesDocument = `
    query GetRelevantCompanies($where: companies_bool_exp!, $current_user: Int = 0) {
  companies(where: $where) {
    id
    logo
    name
    slug
    sentiment
    follows(where: {created_by_user_id: {_eq: $current_user}}) {
      list {
        name
      }
    }
  }
}
    `;
export const useGetRelevantCompaniesQuery = <
      TData = GetRelevantCompaniesQuery,
      TError = Error
    >(
      variables: GetRelevantCompaniesQueryVariables,
      options?: UseQueryOptions<GetRelevantCompaniesQuery, TError, TData>
    ) =>
    useQuery<GetRelevantCompaniesQuery, TError, TData>(
      ['GetRelevantCompanies', variables],
      fetcher<GetRelevantCompaniesQuery, GetRelevantCompaniesQueryVariables>(GetRelevantCompaniesDocument, variables),
      options
    );
useGetRelevantCompaniesQuery.document = GetRelevantCompaniesDocument;


useGetRelevantCompaniesQuery.getKey = (variables: GetRelevantCompaniesQueryVariables) => ['GetRelevantCompanies', variables];
;

useGetRelevantCompaniesQuery.fetcher = (variables: GetRelevantCompaniesQueryVariables, options?: RequestInit['headers']) => fetcher<GetRelevantCompaniesQuery, GetRelevantCompaniesQueryVariables>(GetRelevantCompaniesDocument, variables, options);
export const GetFollowsListsStaticPathsDocument = `
    query GetFollowsListsStaticPaths {
  follows {
    id
    list_id
  }
}
    `;
export const useGetFollowsListsStaticPathsQuery = <
      TData = GetFollowsListsStaticPathsQuery,
      TError = Error
    >(
      variables?: GetFollowsListsStaticPathsQueryVariables,
      options?: UseQueryOptions<GetFollowsListsStaticPathsQuery, TError, TData>
    ) =>
    useQuery<GetFollowsListsStaticPathsQuery, TError, TData>(
      variables === undefined ? ['GetFollowsListsStaticPaths'] : ['GetFollowsListsStaticPaths', variables],
      fetcher<GetFollowsListsStaticPathsQuery, GetFollowsListsStaticPathsQueryVariables>(GetFollowsListsStaticPathsDocument, variables),
      options
    );
useGetFollowsListsStaticPathsQuery.document = GetFollowsListsStaticPathsDocument;


useGetFollowsListsStaticPathsQuery.getKey = (variables?: GetFollowsListsStaticPathsQueryVariables) => variables === undefined ? ['GetFollowsListsStaticPaths'] : ['GetFollowsListsStaticPaths', variables];
;

useGetFollowsListsStaticPathsQuery.fetcher = (variables?: GetFollowsListsStaticPathsQueryVariables, options?: RequestInit['headers']) => fetcher<GetFollowsListsStaticPathsQuery, GetFollowsListsStaticPathsQueryVariables>(GetFollowsListsStaticPathsDocument, variables, options);
export const GetCompaniesByListIdDocument = `
    query GetCompaniesByListId($list_id: Int = 0) {
  follows_companies(where: {list_id: {_eq: $list_id}}) {
    id
    company {
      id
      name
      logo
      sentiment
      location
      coin {
        ticker
        name
      }
      teamMembers {
        id
      }
      investment_rounds {
        amount
      }
      tags
      slug
    }
  }
}
    `;
export const useGetCompaniesByListIdQuery = <
      TData = GetCompaniesByListIdQuery,
      TError = Error
    >(
      variables?: GetCompaniesByListIdQueryVariables,
      options?: UseQueryOptions<GetCompaniesByListIdQuery, TError, TData>
    ) =>
    useQuery<GetCompaniesByListIdQuery, TError, TData>(
      variables === undefined ? ['GetCompaniesByListId'] : ['GetCompaniesByListId', variables],
      fetcher<GetCompaniesByListIdQuery, GetCompaniesByListIdQueryVariables>(GetCompaniesByListIdDocument, variables),
      options
    );
useGetCompaniesByListIdQuery.document = GetCompaniesByListIdDocument;


useGetCompaniesByListIdQuery.getKey = (variables?: GetCompaniesByListIdQueryVariables) => variables === undefined ? ['GetCompaniesByListId'] : ['GetCompaniesByListId', variables];
;

useGetCompaniesByListIdQuery.fetcher = (variables?: GetCompaniesByListIdQueryVariables, options?: RequestInit['headers']) => fetcher<GetCompaniesByListIdQuery, GetCompaniesByListIdQueryVariables>(GetCompaniesByListIdDocument, variables, options);
export const GetVcFirmsByListIdDocument = `
    query GetVcFirmsByListId($list_id: Int = 0) {
  follows_vc_firms(where: {list_id: {_eq: $list_id}}) {
    id
    vc_firm {
      id
      name
      num_of_investments
      latest_investments
      sentiment
      logo
      slug
    }
  }
}
    `;
export const useGetVcFirmsByListIdQuery = <
      TData = GetVcFirmsByListIdQuery,
      TError = Error
    >(
      variables?: GetVcFirmsByListIdQueryVariables,
      options?: UseQueryOptions<GetVcFirmsByListIdQuery, TError, TData>
    ) =>
    useQuery<GetVcFirmsByListIdQuery, TError, TData>(
      variables === undefined ? ['GetVcFirmsByListId'] : ['GetVcFirmsByListId', variables],
      fetcher<GetVcFirmsByListIdQuery, GetVcFirmsByListIdQueryVariables>(GetVcFirmsByListIdDocument, variables),
      options
    );
useGetVcFirmsByListIdQuery.document = GetVcFirmsByListIdDocument;


useGetVcFirmsByListIdQuery.getKey = (variables?: GetVcFirmsByListIdQueryVariables) => variables === undefined ? ['GetVcFirmsByListId'] : ['GetVcFirmsByListId', variables];
;

useGetVcFirmsByListIdQuery.fetcher = (variables?: GetVcFirmsByListIdQueryVariables, options?: RequestInit['headers']) => fetcher<GetVcFirmsByListIdQuery, GetVcFirmsByListIdQueryVariables>(GetVcFirmsByListIdDocument, variables, options);
export const GetListsByUserDocument = `
    query GetListsByUser($current_user: Int) {
  lists(where: {created_by_id: {_eq: $current_user}}) {
    id
    name
    total_no_of_resources
  }
}
    `;
export const useGetListsByUserQuery = <
      TData = GetListsByUserQuery,
      TError = Error
    >(
      variables?: GetListsByUserQueryVariables,
      options?: UseQueryOptions<GetListsByUserQuery, TError, TData>
    ) =>
    useQuery<GetListsByUserQuery, TError, TData>(
      variables === undefined ? ['GetListsByUser'] : ['GetListsByUser', variables],
      fetcher<GetListsByUserQuery, GetListsByUserQueryVariables>(GetListsByUserDocument, variables),
      options
    );
useGetListsByUserQuery.document = GetListsByUserDocument;


useGetListsByUserQuery.getKey = (variables?: GetListsByUserQueryVariables) => variables === undefined ? ['GetListsByUser'] : ['GetListsByUser', variables];
;

useGetListsByUserQuery.fetcher = (variables?: GetListsByUserQueryVariables, options?: RequestInit['headers']) => fetcher<GetListsByUserQuery, GetListsByUserQueryVariables>(GetListsByUserDocument, variables, options);
export const GetPersonDocument = `
    query GetPerson($slug: String!) {
  people(where: {slug: {_eq: $slug}}) {
    id
    name
    slug
    picture
    type
    personal_email
    work_email
    linkedin
    team_members {
      company {
        id
        slug
        name
        logo
        overview
      }
    }
    investments {
      investment_round {
        id
        round_date
        round
        amount
        company {
          id
          slug
          name
          logo
        }
      }
    }
  }
}
    `;
export const useGetPersonQuery = <
      TData = GetPersonQuery,
      TError = Error
    >(
      variables: GetPersonQueryVariables,
      options?: UseQueryOptions<GetPersonQuery, TError, TData>
    ) =>
    useQuery<GetPersonQuery, TError, TData>(
      ['GetPerson', variables],
      fetcher<GetPersonQuery, GetPersonQueryVariables>(GetPersonDocument, variables),
      options
    );
useGetPersonQuery.document = GetPersonDocument;


useGetPersonQuery.getKey = (variables: GetPersonQueryVariables) => ['GetPerson', variables];
;

useGetPersonQuery.fetcher = (variables: GetPersonQueryVariables, options?: RequestInit['headers']) => fetcher<GetPersonQuery, GetPersonQueryVariables>(GetPersonDocument, variables, options);
export const GetPersonsPathDocument = `
    query GetPersonsPath {
  people(where: {slug: {_neq: ""}}, order_by: {slug: asc}) {
    id
    name
    slug
  }
}
    `;
export const useGetPersonsPathQuery = <
      TData = GetPersonsPathQuery,
      TError = Error
    >(
      variables?: GetPersonsPathQueryVariables,
      options?: UseQueryOptions<GetPersonsPathQuery, TError, TData>
    ) =>
    useQuery<GetPersonsPathQuery, TError, TData>(
      variables === undefined ? ['GetPersonsPath'] : ['GetPersonsPath', variables],
      fetcher<GetPersonsPathQuery, GetPersonsPathQueryVariables>(GetPersonsPathDocument, variables),
      options
    );
useGetPersonsPathQuery.document = GetPersonsPathDocument;


useGetPersonsPathQuery.getKey = (variables?: GetPersonsPathQueryVariables) => variables === undefined ? ['GetPersonsPath'] : ['GetPersonsPath', variables];
;

useGetPersonsPathQuery.fetcher = (variables?: GetPersonsPathQueryVariables, options?: RequestInit['headers']) => fetcher<GetPersonsPathQuery, GetPersonsPathQueryVariables>(GetPersonsPathDocument, variables, options);
export const GetVcFirmDocument = `
    query GetVCFirm($slug: String!, $current_user: Int) {
  vc_firms(where: {slug: {_eq: $slug}}) {
    id
    name
    slug
    logo
    website
    linkedin
    sentiment
    tags
    overview
    year_founded
    location
    twitter
    investors {
      id
      person {
        id
        slug
        name
        picture
        linkedin
        personal_email
        work_email
      }
      function
      start_date
      end_date
      seniority
      title
    }
    investments {
      investment_round {
        id
        round_date
        round
        amount
        company {
          id
          slug
          name
          logo
        }
      }
    }
    follows(where: {created_by_user_id: {_eq: $current_user}}) {
      list {
        name
      }
    }
  }
}
    `;
export const useGetVcFirmQuery = <
      TData = GetVcFirmQuery,
      TError = Error
    >(
      variables: GetVcFirmQueryVariables,
      options?: UseQueryOptions<GetVcFirmQuery, TError, TData>
    ) =>
    useQuery<GetVcFirmQuery, TError, TData>(
      ['GetVCFirm', variables],
      fetcher<GetVcFirmQuery, GetVcFirmQueryVariables>(GetVcFirmDocument, variables),
      options
    );
useGetVcFirmQuery.document = GetVcFirmDocument;


useGetVcFirmQuery.getKey = (variables: GetVcFirmQueryVariables) => ['GetVCFirm', variables];
;

useGetVcFirmQuery.fetcher = (variables: GetVcFirmQueryVariables, options?: RequestInit['headers']) => fetcher<GetVcFirmQuery, GetVcFirmQueryVariables>(GetVcFirmDocument, variables, options);
export const GetVcFirmsDocument = `
    query GetVCFirms($limit: Int, $offset: Int, $where: vc_firms_bool_exp!, $current_user: Int) {
  vc_firms(
    where: $where
    order_by: {num_of_investments: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    name
    slug
    logo
    num_of_investments
    sentiment
    overview
    follows(where: {created_by_user_id: {_eq: $current_user}}) {
      list {
        name
      }
    }
  }
}
    `;
export const useGetVcFirmsQuery = <
      TData = GetVcFirmsQuery,
      TError = Error
    >(
      variables: GetVcFirmsQueryVariables,
      options?: UseQueryOptions<GetVcFirmsQuery, TError, TData>
    ) =>
    useQuery<GetVcFirmsQuery, TError, TData>(
      ['GetVCFirms', variables],
      fetcher<GetVcFirmsQuery, GetVcFirmsQueryVariables>(GetVcFirmsDocument, variables),
      options
    );
useGetVcFirmsQuery.document = GetVcFirmsDocument;


useGetVcFirmsQuery.getKey = (variables: GetVcFirmsQueryVariables) => ['GetVCFirms', variables];
;

useGetVcFirmsQuery.fetcher = (variables: GetVcFirmsQueryVariables, options?: RequestInit['headers']) => fetcher<GetVcFirmsQuery, GetVcFirmsQueryVariables>(GetVcFirmsDocument, variables, options);
export const GetVcFirmsRecentInvestmentsDocument = `
    query GetVCFirmsRecentInvestments($limit: Int, $offset: Int, $where: vc_firms_bool_exp!, $current_user: Int) {
  vc_firms(
    where: $where
    order_by: {latest_investments: desc_nulls_last}
    limit: $limit
    offset: $offset
  ) {
    id
    name
    slug
    logo
    latest_investments
    num_of_investments
    sentiment
    overview
    follows(where: {created_by_user_id: {_eq: $current_user}}) {
      list {
        name
      }
    }
  }
}
    `;
export const useGetVcFirmsRecentInvestmentsQuery = <
      TData = GetVcFirmsRecentInvestmentsQuery,
      TError = Error
    >(
      variables: GetVcFirmsRecentInvestmentsQueryVariables,
      options?: UseQueryOptions<GetVcFirmsRecentInvestmentsQuery, TError, TData>
    ) =>
    useQuery<GetVcFirmsRecentInvestmentsQuery, TError, TData>(
      ['GetVCFirmsRecentInvestments', variables],
      fetcher<GetVcFirmsRecentInvestmentsQuery, GetVcFirmsRecentInvestmentsQueryVariables>(GetVcFirmsRecentInvestmentsDocument, variables),
      options
    );
useGetVcFirmsRecentInvestmentsQuery.document = GetVcFirmsRecentInvestmentsDocument;


useGetVcFirmsRecentInvestmentsQuery.getKey = (variables: GetVcFirmsRecentInvestmentsQueryVariables) => ['GetVCFirmsRecentInvestments', variables];
;

useGetVcFirmsRecentInvestmentsQuery.fetcher = (variables: GetVcFirmsRecentInvestmentsQueryVariables, options?: RequestInit['headers']) => fetcher<GetVcFirmsRecentInvestmentsQuery, GetVcFirmsRecentInvestmentsQueryVariables>(GetVcFirmsRecentInvestmentsDocument, variables, options);
export const GetVcFirmsPathDocument = `
    query GetVCFirmsPath {
  vc_firms(where: {slug: {_neq: ""}}, order_by: {slug: asc}) {
    id
    name
    slug
  }
}
    `;
export const useGetVcFirmsPathQuery = <
      TData = GetVcFirmsPathQuery,
      TError = Error
    >(
      variables?: GetVcFirmsPathQueryVariables,
      options?: UseQueryOptions<GetVcFirmsPathQuery, TError, TData>
    ) =>
    useQuery<GetVcFirmsPathQuery, TError, TData>(
      variables === undefined ? ['GetVCFirmsPath'] : ['GetVCFirmsPath', variables],
      fetcher<GetVcFirmsPathQuery, GetVcFirmsPathQueryVariables>(GetVcFirmsPathDocument, variables),
      options
    );
useGetVcFirmsPathQuery.document = GetVcFirmsPathDocument;


useGetVcFirmsPathQuery.getKey = (variables?: GetVcFirmsPathQueryVariables) => variables === undefined ? ['GetVCFirmsPath'] : ['GetVCFirmsPath', variables];
;

useGetVcFirmsPathQuery.fetcher = (variables?: GetVcFirmsPathQueryVariables, options?: RequestInit['headers']) => fetcher<GetVcFirmsPathQuery, GetVcFirmsPathQueryVariables>(GetVcFirmsPathDocument, variables, options);
export const GetRelevantVcFirmsDocument = `
    query GetRelevantVCFirms($where: vc_firms_bool_exp!, $current_user: Int) {
  vc_firms(where: $where) {
    id
    logo
    name
    slug
    sentiment
    follows(where: {created_by_user_id: {_eq: $current_user}}) {
      list {
        name
      }
    }
  }
}
    `;
export const useGetRelevantVcFirmsQuery = <
      TData = GetRelevantVcFirmsQuery,
      TError = Error
    >(
      variables: GetRelevantVcFirmsQueryVariables,
      options?: UseQueryOptions<GetRelevantVcFirmsQuery, TError, TData>
    ) =>
    useQuery<GetRelevantVcFirmsQuery, TError, TData>(
      ['GetRelevantVCFirms', variables],
      fetcher<GetRelevantVcFirmsQuery, GetRelevantVcFirmsQueryVariables>(GetRelevantVcFirmsDocument, variables),
      options
    );
useGetRelevantVcFirmsQuery.document = GetRelevantVcFirmsDocument;


useGetRelevantVcFirmsQuery.getKey = (variables: GetRelevantVcFirmsQueryVariables) => ['GetRelevantVCFirms', variables];
;

useGetRelevantVcFirmsQuery.fetcher = (variables: GetRelevantVcFirmsQueryVariables, options?: RequestInit['headers']) => fetcher<GetRelevantVcFirmsQuery, GetRelevantVcFirmsQueryVariables>(GetRelevantVcFirmsDocument, variables, options);