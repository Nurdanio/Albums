import ClipLoader from 'react-spinners/ClipLoader'

export default function Preloader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '200px',
      }}
    >
      <ClipLoader size={150} speedMultiplier={0.5} />
    </div>
  )
}
