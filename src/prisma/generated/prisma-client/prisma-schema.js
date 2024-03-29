module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateNote {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateTodo {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

enum Grade {
  DEFAULT_USER
  PREMIUM_USER
}

scalar Long

type Mutation {
  createNote(data: NoteCreateInput!): Note!
  updateNote(data: NoteUpdateInput!, where: NoteWhereUniqueInput!): Note
  updateManyNotes(data: NoteUpdateManyMutationInput!, where: NoteWhereInput): BatchPayload!
  upsertNote(where: NoteWhereUniqueInput!, create: NoteCreateInput!, update: NoteUpdateInput!): Note!
  deleteNote(where: NoteWhereUniqueInput!): Note
  deleteManyNotes(where: NoteWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
  createTodo(data: TodoCreateInput!): Todo!
  updateTodo(data: TodoUpdateInput!, where: TodoWhereUniqueInput!): Todo
  updateManyTodoes(data: TodoUpdateManyMutationInput!, where: TodoWhereInput): BatchPayload!
  upsertTodo(where: TodoWhereUniqueInput!, create: TodoCreateInput!, update: TodoUpdateInput!): Todo!
  deleteTodo(where: TodoWhereUniqueInput!): Todo
  deleteManyTodoes(where: TodoWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Note {
  id: ID!
  user: User!
  title: String!
  content: String!
  createdAt: DateTime!
  updatedAt: DateTime
}

type NoteConnection {
  pageInfo: PageInfo!
  edges: [NoteEdge]!
  aggregate: AggregateNote!
}

input NoteCreateInput {
  id: ID
  user: UserCreateOneWithoutNotesInput!
  title: String!
  content: String!
}

input NoteCreateManyWithoutUserInput {
  create: [NoteCreateWithoutUserInput!]
  connect: [NoteWhereUniqueInput!]
}

input NoteCreateWithoutUserInput {
  id: ID
  title: String!
  content: String!
}

type NoteEdge {
  node: Note!
  cursor: String!
}

enum NoteOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NotePreviousValues {
  id: ID!
  title: String!
  content: String!
  createdAt: DateTime!
  updatedAt: DateTime
}

input NoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [NoteScalarWhereInput!]
  OR: [NoteScalarWhereInput!]
  NOT: [NoteScalarWhereInput!]
}

type NoteSubscriptionPayload {
  mutation: MutationType!
  node: Note
  updatedFields: [String!]
  previousValues: NotePreviousValues
}

input NoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NoteWhereInput
  AND: [NoteSubscriptionWhereInput!]
}

input NoteUpdateInput {
  user: UserUpdateOneRequiredWithoutNotesInput
  title: String
  content: String
}

input NoteUpdateManyDataInput {
  title: String
  content: String
}

input NoteUpdateManyMutationInput {
  title: String
  content: String
}

input NoteUpdateManyWithoutUserInput {
  create: [NoteCreateWithoutUserInput!]
  delete: [NoteWhereUniqueInput!]
  connect: [NoteWhereUniqueInput!]
  set: [NoteWhereUniqueInput!]
  disconnect: [NoteWhereUniqueInput!]
  update: [NoteUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [NoteUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [NoteScalarWhereInput!]
  updateMany: [NoteUpdateManyWithWhereNestedInput!]
}

input NoteUpdateManyWithWhereNestedInput {
  where: NoteScalarWhereInput!
  data: NoteUpdateManyDataInput!
}

input NoteUpdateWithoutUserDataInput {
  title: String
  content: String
}

input NoteUpdateWithWhereUniqueWithoutUserInput {
  where: NoteWhereUniqueInput!
  data: NoteUpdateWithoutUserDataInput!
}

input NoteUpsertWithWhereUniqueWithoutUserInput {
  where: NoteWhereUniqueInput!
  update: NoteUpdateWithoutUserDataInput!
  create: NoteCreateWithoutUserInput!
}

input NoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [NoteWhereInput!]
}

input NoteWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  note(where: NoteWhereUniqueInput!): Note
  notes(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Note]!
  notesConnection(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NoteConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  todo(where: TodoWhereUniqueInput!): Todo
  todoes(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo]!
  todoesConnection(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TodoConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  note(where: NoteSubscriptionWhereInput): NoteSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  todo(where: TodoSubscriptionWhereInput): TodoSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tag {
  id: ID!
  user: User!
  name: String!
  color: String!
  createdAt: DateTime!
  updatedAt: DateTime
  todos(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo!]
}

type TagConnection {
  pageInfo: PageInfo!
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  id: ID
  user: UserCreateOneWithoutTagsInput!
  name: String!
  color: String!
  todos: TodoCreateManyWithoutTagInput
}

input TagCreateManyWithoutUserInput {
  create: [TagCreateWithoutUserInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateOneWithoutTodosInput {
  create: TagCreateWithoutTodosInput
  connect: TagWhereUniqueInput
}

input TagCreateWithoutTodosInput {
  id: ID
  user: UserCreateOneWithoutTagsInput!
  name: String!
  color: String!
}

input TagCreateWithoutUserInput {
  id: ID
  name: String!
  color: String!
  todos: TodoCreateManyWithoutTagInput
}

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  color_ASC
  color_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
  color: String!
  createdAt: DateTime!
  updatedAt: DateTime
}

input TagScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TagScalarWhereInput!]
  OR: [TagScalarWhereInput!]
  NOT: [TagScalarWhereInput!]
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
}

input TagUpdateInput {
  user: UserUpdateOneRequiredWithoutTagsInput
  name: String
  color: String
  todos: TodoUpdateManyWithoutTagInput
}

input TagUpdateManyDataInput {
  name: String
  color: String
}

input TagUpdateManyMutationInput {
  name: String
  color: String
}

input TagUpdateManyWithoutUserInput {
  create: [TagCreateWithoutUserInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  set: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateOneRequiredWithoutTodosInput {
  create: TagCreateWithoutTodosInput
  update: TagUpdateWithoutTodosDataInput
  upsert: TagUpsertWithoutTodosInput
  connect: TagWhereUniqueInput
}

input TagUpdateWithoutTodosDataInput {
  user: UserUpdateOneRequiredWithoutTagsInput
  name: String
  color: String
}

input TagUpdateWithoutUserDataInput {
  name: String
  color: String
  todos: TodoUpdateManyWithoutTagInput
}

input TagUpdateWithWhereUniqueWithoutUserInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutUserDataInput!
}

input TagUpsertWithoutTodosInput {
  update: TagUpdateWithoutTodosDataInput!
  create: TagCreateWithoutTodosInput!
}

input TagUpsertWithWhereUniqueWithoutUserInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutUserDataInput!
  create: TagCreateWithoutUserInput!
}

input TagWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  todos_some: TodoWhereInput
  AND: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
}

type Todo {
  id: ID!
  user: User!
  tag: Tag!
  index: Int!
  done: Boolean!
  content: String!
  createdAt: DateTime!
  updatedAt: DateTime
}

type TodoConnection {
  pageInfo: PageInfo!
  edges: [TodoEdge]!
  aggregate: AggregateTodo!
}

input TodoCreateInput {
  id: ID
  user: UserCreateOneWithoutTodosInput!
  tag: TagCreateOneWithoutTodosInput!
  index: Int!
  done: Boolean
  content: String!
}

input TodoCreateManyWithoutTagInput {
  create: [TodoCreateWithoutTagInput!]
  connect: [TodoWhereUniqueInput!]
}

input TodoCreateManyWithoutUserInput {
  create: [TodoCreateWithoutUserInput!]
  connect: [TodoWhereUniqueInput!]
}

input TodoCreateWithoutTagInput {
  id: ID
  user: UserCreateOneWithoutTodosInput!
  index: Int!
  done: Boolean
  content: String!
}

input TodoCreateWithoutUserInput {
  id: ID
  tag: TagCreateOneWithoutTodosInput!
  index: Int!
  done: Boolean
  content: String!
}

type TodoEdge {
  node: Todo!
  cursor: String!
}

enum TodoOrderByInput {
  id_ASC
  id_DESC
  index_ASC
  index_DESC
  done_ASC
  done_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TodoPreviousValues {
  id: ID!
  index: Int!
  done: Boolean!
  content: String!
  createdAt: DateTime!
  updatedAt: DateTime
}

input TodoScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  index: Int
  index_not: Int
  index_in: [Int!]
  index_not_in: [Int!]
  index_lt: Int
  index_lte: Int
  index_gt: Int
  index_gte: Int
  done: Boolean
  done_not: Boolean
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TodoScalarWhereInput!]
  OR: [TodoScalarWhereInput!]
  NOT: [TodoScalarWhereInput!]
}

type TodoSubscriptionPayload {
  mutation: MutationType!
  node: Todo
  updatedFields: [String!]
  previousValues: TodoPreviousValues
}

input TodoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TodoWhereInput
  AND: [TodoSubscriptionWhereInput!]
}

input TodoUpdateInput {
  user: UserUpdateOneRequiredWithoutTodosInput
  tag: TagUpdateOneRequiredWithoutTodosInput
  index: Int
  done: Boolean
  content: String
}

input TodoUpdateManyDataInput {
  index: Int
  done: Boolean
  content: String
}

input TodoUpdateManyMutationInput {
  index: Int
  done: Boolean
  content: String
}

input TodoUpdateManyWithoutTagInput {
  create: [TodoCreateWithoutTagInput!]
  delete: [TodoWhereUniqueInput!]
  connect: [TodoWhereUniqueInput!]
  set: [TodoWhereUniqueInput!]
  disconnect: [TodoWhereUniqueInput!]
  update: [TodoUpdateWithWhereUniqueWithoutTagInput!]
  upsert: [TodoUpsertWithWhereUniqueWithoutTagInput!]
  deleteMany: [TodoScalarWhereInput!]
  updateMany: [TodoUpdateManyWithWhereNestedInput!]
}

input TodoUpdateManyWithoutUserInput {
  create: [TodoCreateWithoutUserInput!]
  delete: [TodoWhereUniqueInput!]
  connect: [TodoWhereUniqueInput!]
  set: [TodoWhereUniqueInput!]
  disconnect: [TodoWhereUniqueInput!]
  update: [TodoUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [TodoUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [TodoScalarWhereInput!]
  updateMany: [TodoUpdateManyWithWhereNestedInput!]
}

input TodoUpdateManyWithWhereNestedInput {
  where: TodoScalarWhereInput!
  data: TodoUpdateManyDataInput!
}

input TodoUpdateWithoutTagDataInput {
  user: UserUpdateOneRequiredWithoutTodosInput
  index: Int
  done: Boolean
  content: String
}

input TodoUpdateWithoutUserDataInput {
  tag: TagUpdateOneRequiredWithoutTodosInput
  index: Int
  done: Boolean
  content: String
}

input TodoUpdateWithWhereUniqueWithoutTagInput {
  where: TodoWhereUniqueInput!
  data: TodoUpdateWithoutTagDataInput!
}

input TodoUpdateWithWhereUniqueWithoutUserInput {
  where: TodoWhereUniqueInput!
  data: TodoUpdateWithoutUserDataInput!
}

input TodoUpsertWithWhereUniqueWithoutTagInput {
  where: TodoWhereUniqueInput!
  update: TodoUpdateWithoutTagDataInput!
  create: TodoCreateWithoutTagInput!
}

input TodoUpsertWithWhereUniqueWithoutUserInput {
  where: TodoWhereUniqueInput!
  update: TodoUpdateWithoutUserDataInput!
  create: TodoCreateWithoutUserInput!
}

input TodoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  tag: TagWhereInput
  index: Int
  index_not: Int
  index_in: [Int!]
  index_not_in: [Int!]
  index_lt: Int
  index_lte: Int
  index_gt: Int
  index_gte: Int
  done: Boolean
  done_not: Boolean
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TodoWhereInput!]
}

input TodoWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  userId: String!
  name: String!
  password: String!
  grade: Grade!
  index: Int!
  createdAt: DateTime!
  updatedAt: DateTime
  notes(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Note!]
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  todos(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  userId: String!
  name: String!
  password: String!
  grade: Grade
  index: Int
  notes: NoteCreateManyWithoutUserInput
  tags: TagCreateManyWithoutUserInput
  todos: TodoCreateManyWithoutUserInput
}

input UserCreateOneWithoutNotesInput {
  create: UserCreateWithoutNotesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTagsInput {
  create: UserCreateWithoutTagsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTodosInput {
  create: UserCreateWithoutTodosInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutNotesInput {
  id: ID
  userId: String!
  name: String!
  password: String!
  grade: Grade
  index: Int
  tags: TagCreateManyWithoutUserInput
  todos: TodoCreateManyWithoutUserInput
}

input UserCreateWithoutTagsInput {
  id: ID
  userId: String!
  name: String!
  password: String!
  grade: Grade
  index: Int
  notes: NoteCreateManyWithoutUserInput
  todos: TodoCreateManyWithoutUserInput
}

input UserCreateWithoutTodosInput {
  id: ID
  userId: String!
  name: String!
  password: String!
  grade: Grade
  index: Int
  notes: NoteCreateManyWithoutUserInput
  tags: TagCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  userId_ASC
  userId_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  grade_ASC
  grade_DESC
  index_ASC
  index_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  userId: String!
  name: String!
  password: String!
  grade: Grade!
  index: Int!
  createdAt: DateTime!
  updatedAt: DateTime
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  userId: String
  name: String
  password: String
  grade: Grade
  index: Int
  notes: NoteUpdateManyWithoutUserInput
  tags: TagUpdateManyWithoutUserInput
  todos: TodoUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  userId: String
  name: String
  password: String
  grade: Grade
  index: Int
}

input UserUpdateOneRequiredWithoutNotesInput {
  create: UserCreateWithoutNotesInput
  update: UserUpdateWithoutNotesDataInput
  upsert: UserUpsertWithoutNotesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutTagsInput {
  create: UserCreateWithoutTagsInput
  update: UserUpdateWithoutTagsDataInput
  upsert: UserUpsertWithoutTagsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutTodosInput {
  create: UserCreateWithoutTodosInput
  update: UserUpdateWithoutTodosDataInput
  upsert: UserUpsertWithoutTodosInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutNotesDataInput {
  userId: String
  name: String
  password: String
  grade: Grade
  index: Int
  tags: TagUpdateManyWithoutUserInput
  todos: TodoUpdateManyWithoutUserInput
}

input UserUpdateWithoutTagsDataInput {
  userId: String
  name: String
  password: String
  grade: Grade
  index: Int
  notes: NoteUpdateManyWithoutUserInput
  todos: TodoUpdateManyWithoutUserInput
}

input UserUpdateWithoutTodosDataInput {
  userId: String
  name: String
  password: String
  grade: Grade
  index: Int
  notes: NoteUpdateManyWithoutUserInput
  tags: TagUpdateManyWithoutUserInput
}

input UserUpsertWithoutNotesInput {
  update: UserUpdateWithoutNotesDataInput!
  create: UserCreateWithoutNotesInput!
}

input UserUpsertWithoutTagsInput {
  update: UserUpdateWithoutTagsDataInput!
  create: UserCreateWithoutTagsInput!
}

input UserUpsertWithoutTodosInput {
  update: UserUpdateWithoutTodosDataInput!
  create: UserCreateWithoutTodosInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userId: String
  userId_not: String
  userId_in: [String!]
  userId_not_in: [String!]
  userId_lt: String
  userId_lte: String
  userId_gt: String
  userId_gte: String
  userId_contains: String
  userId_not_contains: String
  userId_starts_with: String
  userId_not_starts_with: String
  userId_ends_with: String
  userId_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  grade: Grade
  grade_not: Grade
  grade_in: [Grade!]
  grade_not_in: [Grade!]
  index: Int
  index_not: Int
  index_in: [Int!]
  index_not_in: [Int!]
  index_lt: Int
  index_lte: Int
  index_gt: Int
  index_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  notes_some: NoteWhereInput
  tags_some: TagWhereInput
  todos_some: TodoWhereInput
  AND: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  userId: String
}
`
      }
    