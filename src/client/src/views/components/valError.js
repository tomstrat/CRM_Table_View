export default function ValError(props) {
  const { message } = props
  return (
    <div className="valError">
      {typeof message === Array ? message.join("\n"): message}
    </div>
  )
}