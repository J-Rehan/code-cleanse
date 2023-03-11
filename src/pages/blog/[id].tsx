import { createClient } from 'contentful'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BLOCKS } from '@contentful/rich-text-types'
import { IBlog, IBlogFields } from '../../@types/generated/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useRouter } from 'next/router'
import CloseHeader from '../../components/shared/CloseHeader/CloseHeader'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const { items } = await client.getEntries<IBlogFields>({
    content_type: 'blog',
    'fields.slug': params.id,
  })

  return {
    props: { blog: items[0] },
  }
}

interface Props {
  blog: IBlog
}

export const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mt-5 text-[#1f2937] leading-7">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-3xl font-bold">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl font-bold">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-xl font-bold">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-lg font-bold">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-base font-bold">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-sm font-bold">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="ml-12">{children}</li>
    ),
  },
}

const BlogDetailPage: NextPage<Props> = (props) => {
  const { blog } = props
  const router = useRouter()

  return (
    <div>
      <CloseHeader />
      <div className="max-w-[1200px] mx-auto px-16">
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex justify-center items-center">
            <span className="sr-only">Code Cleanse</span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_601_917" fill="white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35.1465 8.26777C36.1304 7.29146 36.1304 5.70854 35.1465 4.73223C34.1627 3.75592 32.5675 3.75592 31.5837 4.73223L17.8444 18.3662L11.3315 11.9032C10.3477 10.9269 8.75251 10.9269 7.76865 11.9032C6.7848 12.8795 6.7848 14.4625 7.76866 15.4388L15.92 23.5276C16.5844 24.1869 17.5277 24.401 18.3732 24.1697C18.9094 24.1031 19.4282 23.8655 19.84 23.457L35.1465 8.26777Z"
                />
              </mask>
              <path
                d="M35.1465 4.73223L35.8509 4.02241L35.8509 4.02241L35.1465 4.73223ZM35.1465 8.26777L34.4422 7.55795V7.55795L35.1465 8.26777ZM31.5837 4.73223L30.8793 4.02241V4.02241L31.5837 4.73223ZM17.8444 18.3662L17.14 19.076L17.8444 19.775L18.5488 19.076L17.8444 18.3662ZM11.3315 11.9032L10.6271 12.6131L11.3315 11.9032ZM7.76865 11.9032L7.06427 11.1934H7.06427L7.76865 11.9032ZM7.76866 15.4388L7.06428 16.1486H7.06428L7.76866 15.4388ZM15.92 23.5276L15.2156 24.2374H15.2156L15.92 23.5276ZM18.3732 24.1697L18.2499 23.1774L18.1786 23.1862L18.1093 23.2052L18.3732 24.1697ZM19.84 23.457L20.5443 24.1668L19.84 23.457ZM34.4422 5.44206C35.0319 6.02723 35.0319 6.97277 34.4422 7.55795L35.8509 8.97759C37.2289 7.61014 37.2289 5.38986 35.8509 4.02241L34.4422 5.44206ZM32.2881 5.44206C32.882 4.85265 33.8482 4.85265 34.4422 5.44206L35.8509 4.02241C34.4772 2.6592 32.2531 2.6592 30.8793 4.02241L32.2881 5.44206ZM18.5488 19.076L32.2881 5.44206L30.8793 4.02241L17.14 17.6563L18.5488 19.076ZM10.6271 12.6131L17.14 19.076L18.5488 17.6563L12.0359 11.1934L10.6271 12.6131ZM8.47303 12.6131C9.067 12.0237 10.0332 12.0237 10.6271 12.6131L12.0359 11.1934C10.6621 9.8302 8.43802 9.8302 7.06427 11.1934L8.47303 12.6131ZM8.47303 14.7289C7.88334 14.1438 7.88334 13.1982 8.47303 12.6131L7.06427 11.1934C5.68626 12.5609 5.68626 14.7811 7.06428 16.1486L8.47303 14.7289ZM16.6243 22.8177L8.47303 14.7289L7.06428 16.1486L15.2156 24.2374L16.6243 22.8177ZM18.1093 23.2052C17.5934 23.3463 17.0237 23.214 16.6243 22.8177L15.2156 24.2374C16.1452 25.1598 17.4619 25.4557 18.637 25.1343L18.1093 23.2052ZM19.1356 22.7471C18.887 22.9938 18.5752 23.137 18.2499 23.1774L18.4964 25.1621C19.2436 25.0693 19.9694 24.7373 20.5443 24.1668L19.1356 22.7471ZM34.4422 7.55795L19.1356 22.7471L20.5443 24.1668L35.8509 8.97759L34.4422 7.55795Z"
                fill="white"
                mask="url(#path-1-inside-1_601_917)"
              />
              <mask id="path-3-inside-2_601_917" fill="white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.9514 13.4399L9.426 10.2556C5.55784 12.7523 3 17.0797 3 22C3 29.732 9.31646 36 17.1082 36C24.9 36 31.2164 29.732 31.2164 22C31.2164 17.4167 28.9969 13.3478 25.5664 10.794L22.2293 13.9721C24.9054 15.6566 26.6816 18.6225 26.6816 22.0001C26.6816 27.2468 22.3955 31.5001 17.1082 31.5001C11.8209 31.5001 7.53478 27.2468 7.53478 22.0001C7.53478 18.2315 9.7461 14.9754 12.9514 13.4399Z"
                />
              </mask>
              <path
                d="M12.9514 13.4399L13.3834 14.3418L14.7284 13.6974L13.6217 12.6978L12.9514 13.4399ZM9.426 10.2556L10.0963 9.51352L9.52759 8.99984L8.88371 9.41543L9.426 10.2556ZM25.5664 10.794L26.1635 9.99183L25.4872 9.48838L24.8767 10.0698L25.5664 10.794ZM22.2293 13.9721L21.5397 13.248L20.6093 14.134L21.6966 14.8184L22.2293 13.9721ZM13.6217 12.6978L10.0963 9.51352L8.75571 10.9977L12.2811 14.182L13.6217 12.6978ZM8.88371 9.41543C4.74425 12.0872 2 16.7238 2 22H4C4 17.4357 6.37144 13.4174 9.9683 11.0958L8.88371 9.41543ZM2 22C2 30.2916 8.77145 37 17.1082 37V35C9.86147 35 4 29.1725 4 22H2ZM17.1082 37C25.445 37 32.2164 30.2916 32.2164 22H30.2164C30.2164 29.1725 24.3549 35 17.1082 35V37ZM32.2164 22C32.2164 17.0855 29.8351 12.7251 26.1635 9.99183L24.9692 11.5961C28.1588 13.9705 30.2164 17.748 30.2164 22H32.2164ZM24.8767 10.0698L21.5397 13.248L22.919 14.6962L26.256 11.5181L24.8767 10.0698ZM27.6816 22.0001C27.6816 18.2623 25.7147 14.9844 22.762 13.1258L21.6966 14.8184C24.0961 16.3288 25.6816 18.9827 25.6816 22.0001H27.6816ZM17.1082 32.5001C22.9405 32.5001 27.6816 27.8063 27.6816 22.0001H25.6816C25.6816 26.6872 21.8505 30.5001 17.1082 30.5001V32.5001ZM6.53478 22.0001C6.53478 27.8063 11.2759 32.5001 17.1082 32.5001V30.5001C12.366 30.5001 8.53478 26.6872 8.53478 22.0001H6.53478ZM12.5193 12.538C8.98305 14.2321 6.53478 17.8291 6.53478 22.0001H8.53478C8.53478 18.6339 10.5092 15.7187 13.3834 14.3418L12.5193 12.538Z"
                fill="white"
                mask="url(#path-3-inside-2_601_917)"
              />
              <path
                d="M24.1239 15.1328C23.5096 14.4032 23.5769 13.3246 24.2772 12.6765C25.0328 11.9773 26.2251 12.0503 26.8891 12.8365L28.2692 14.4702L25.707 17.0127L24.1239 15.1328Z"
                stroke="white"
              />
              <path
                d="M7.89575 12.0435C8.68359 11.2617 9.96094 11.2617 10.7488 12.0435L10.7992 12.0936C11.4885 12.7776 11.4885 13.8865 10.7992 14.5704L9.19417 16.1632L7.89575 14.8747C7.1079 14.0929 7.1079 12.8253 7.89575 12.0435Z"
                stroke="white"
              />
              <path
                d="M17.7956 19.1033C17.8419 19.0385 17.9166 19 17.9962 19C18.0735 19 18.1463 19.0362 18.1929 19.0979L19.5686 20.9182C20.5259 22.1847 19.6224 24 18.0348 24C16.4713 24 15.5616 22.233 16.47 20.9604L17.7956 19.1033Z"
                stroke="white"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Code Cleanse</p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={blog.sys.createdAt}>
                {new Date(blog.sys.createdAt).toDateString()}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>5 min. read</span>
            </div>
          </div>
        </div>

        <p className="my-4 text-3xl font-semibold text-gray-900">
          {blog.fields.title}
        </p>

        <div>
          <p>{documentToReactComponents(blog.fields.content, options)}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailPage
