import Footer from '../src/components/common/Footer'
import Menu from '../src/components/common/Menu'

export default function Home() {
  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Menu />
      <Footer />
    </div>
  )
}
