import React from 'react'
import PropTypes from 'prop-types'

const Posts = (props) => (
  <ul>
    {props.posts.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
)
Posts.propTypes = {
  posts: PropTypes.arrayOf.isRequired,
}
export default Posts
