import {CMSGraphQLClient, gql} from '../../../infra/cms/CMSGrapQLClient'

export async function getContent() {
  const query = gql`
    query {
      pageSobre {
        pageTitle
        pageDescription
      }
    }
  `

  const client = CMSGraphQLClient()

  const response = await client.query({query})

  return response.data.messages
}
