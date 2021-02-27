import React from 'react'
import PropTypes from 'prop-types'

function Blog(props) {
    const {} = props

    return (
        <div>
            <h1>
                Blog page {props.match.params.id}
            </h1>
        </div>
    )
}

Blog.propTypes = {

}

export default Blog
