import React from 'react'
import Card from '@material-ui/core/card'
import Switch from '@material-ui/core/switch'
import Slider from '@material-ui/core/slider'
import Typography from '@material-ui/core/typography'
import Box from '@material-ui/core/box'
import Select from '@material-ui/core/select'
import { MenuItem } from '@material-ui/core'

export default function Dashboard() {
  const [isOnline, toggleOnline] = React.useState(true)
  const [volume, adjustVolume] = React.useState(20)
  const [quality, adjustQuality] = React.useState('normal')
  // const [notifications, notificationUpdater] = React.useState([
  //   {
  //     offline: `Your application is offline. You won't be able to share or stream music to other devices`,
  //   },
  //   {
  //     volumeWarn: `Listening to music at a high volume could cause long-term hearing loss.`,
  //   },
  //   {
  //     qualityWarn: `Music quality is degraded. Increase quality if your connection allows it.`,
  //   },
  // ])

  let notification = React.useRef('Welcome!')

  // const notificationUpdater = () => {
  //   notification.current = !isOnline
  //     ? `Your application is offline. You won't be able to share or stream music to other devices`
  //     : volume > 80
  //     ? `Listening to music at a high volume could cause long-term hearing loss.`
  //     : quality === 'low'
  //     ? `Music quality is degraded. Increase quality if your connection allows it.`
  //     : `Welcome!`
  // }

  // React.useEffect(() => notificationUpdater())

  return (
    <Box width="50%" textAlign="center">
      <Box>
        {isOnline ? (
          <Card>
            <Typography>Online Mode</Typography>
          </Card>
        ) : (
          <Card>
            <Typography>Offline Mode</Typography>
          </Card>
        )}
      </Box>
      <Box>
        <Switch
          defaultChecked="true"
          onChange={() => toggleOnline(!isOnline)}
        />
      </Box>
      <br />
      <Box>
        <Card>
          <Typography>
            {' '}
            Volume
            <Slider step={10} onChange={(e, v) => adjustVolume(v)} />
          </Typography>
        </Card>
      </Box>
      <Box>
        <Card>
          <Typography>Sound Quality</Typography>
          <Select
            labelId="Sound Quality"
            id="select"
            onChange={(e) => adjustQuality(e.target.value)}
          >
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </Card>
      </Box>
      <Box>
        <Typography>
          {
            (notification.current = !isOnline
              ? `Your application is offline. You won't be able to share or stream music to other devices`
              : volume > 80
              ? `Listening to music at a high volume could cause long-term hearing loss.`
              : quality === 'low'
              ? `Music quality is degraded. Increase quality if your connection allows it.`
              : `Welcome!`)
          }
        </Typography>
      </Box>
    </Box>
  )
}
