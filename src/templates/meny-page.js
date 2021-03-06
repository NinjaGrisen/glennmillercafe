import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import './../scss/table.scss';

export const MenyPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content
    return (
        <section className="section section--gradient">
            <div className="container">
                <div className="background-depending-on-page">
                    <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                        {title}
                    </h2>
                </div>
                <div className="columns">
                    <div className="column is-12">

                        <div className="section">


                            <div className="columns">
                                <div className="column is-11">

                                    <PageContent className="content" content={content} />
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

MenyPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const MenyPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <MenyPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    )
}

MenyPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default MenyPage

export const aboutPageQuery = graphql`
  query MenyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
