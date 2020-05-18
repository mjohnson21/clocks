import Box from '@material-ui/core/Box'
import Clocks from '@components/clocks/clocks.container'

function Home() {
  return (
    <Box p={4} bgcolor="primary.light">
      <Clocks />
    </Box>
  )
}

export default Home
