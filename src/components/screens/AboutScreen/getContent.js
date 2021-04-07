import {CMSGraphQLClient, gql} from '../../../infra/cms/CMSGrapQLClient'

export async function getContent({preview}) {
  const query = gql`
    query {
      pageSobre {
        pageTitle
        pageDescription
      }
    }
  `

  const client = CMSGraphQLClient({preview})

  const response = await client.query({query})

  return response.data.messages
}
