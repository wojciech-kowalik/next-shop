/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddItem($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...CartOrder\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...CartOrder\n  }\n}": types.CartGetByIdDocument,
    "fragment CartOrder on Order {\n  id\n  total\n  orderItems {\n    id\n    total\n    quantity\n    product {\n      id\n      name\n      price\n      description\n      images {\n        url\n      }\n      categories(first: 1) {\n        id\n        name\n      }\n    }\n  }\n}": types.CartOrderFragmentDoc,
    "mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveItemDocument,
    "mutation CartUpdateItem($productId: ID!, $total: Int!, $quantity: Int!) {\n  updateOrderItem(\n    data: {quantity: $quantity, total: $total}\n    where: {id: $productId}\n  ) {\n    id\n  }\n}": types.CartUpdateItemDocument,
    "query CollectionsGetList {\n  collections {\n    name\n    slug\n    image {\n      url\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  reviews {\n    rating\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!, $take: Int!, $offset: Int!) {\n  categories(where: {slug: $slug}) {\n    name\n    products(first: $take, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    name\n    description\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetList($take: Int!, $offset: Int!, $sort: ProductOrderByInput!) {\n  productsConnection {\n    pageInfo {\n      pageSize\n    }\n  }\n  products(first: $take, skip: $offset, orderBy: $sort) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsSearchByQuery($query: String!) {\n  products(where: {name_contains: $query}) {\n    ...ProductListItem\n  }\n}": types.ProductsSearchByQueryDocument,
    "mutation ReviewCreate($productId: ID!, $headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "query ReviewGetByProductId($id: ID!) {\n  reviews(where: {product: {id: $id}}) {\n    headline\n    content\n    name\n    email\n    rating\n  }\n}": types.ReviewGetByProductIdDocument,
    "fragment ReviewListItem on Review {\n  headline\n  content\n  name\n  email\n  rating\n}": types.ReviewListItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...CartOrder\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...CartOrder\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartOrder on Order {\n  id\n  total\n  orderItems {\n    id\n    total\n    quantity\n    product {\n      id\n      name\n      price\n      description\n      images {\n        url\n      }\n      categories(first: 1) {\n        id\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').CartOrderFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartUpdateItem($productId: ID!, $total: Int!, $quantity: Int!) {\n  updateOrderItem(\n    data: {quantity: $quantity, total: $total}\n    where: {id: $productId}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartUpdateItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    name\n    slug\n    image {\n      url\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  reviews {\n    rating\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $take: Int!, $offset: Int!) {\n  categories(where: {slug: $slug}) {\n    name\n    products(first: $take, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    name\n    description\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int!, $offset: Int!, $sort: ProductOrderByInput!) {\n  productsConnection {\n    pageInfo {\n      pageSize\n    }\n  }\n  products(first: $take, skip: $offset, orderBy: $sort) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearchByQuery($query: String!) {\n  products(where: {name_contains: $query}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsSearchByQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($productId: ID!, $headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewGetByProductId($id: ID!) {\n  reviews(where: {product: {id: $id}}) {\n    headline\n    content\n    name\n    email\n    rating\n  }\n}"): typeof import('./graphql').ReviewGetByProductIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewListItem on Review {\n  headline\n  content\n  name\n  email\n  rating\n}"): typeof import('./graphql').ReviewListItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
