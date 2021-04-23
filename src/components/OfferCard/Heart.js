import * as React from 'react'

const Heart = React.forwardRef(function Heart(props, ref) {
  return (
    <svg
      className={props.className ? props.className : null}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="black"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 19.0175L8.55 17.6975C3.4 13.0275 0 9.94748 0 6.16748C0 3.08748 2.42 0.66748 5.5 0.66748C7.24 0.66748 8.91 1.47748 10 2.75748C11.09 1.47748 12.76 0.66748 14.5 0.66748C17.58 0.66748 20 3.08748 20 6.16748C20 9.94748 16.6 13.0275 11.45 17.7075L10 19.0175Z"
        fill-opacity="0.87"
      />
    </svg>
  )
})

export default Heart
