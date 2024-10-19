
function Container(props) {
  return (
    <div className={`max-w-screen-xl mx-auto px-3 ${props.className}`}>{props.children}</div>
  )
}

export default Container