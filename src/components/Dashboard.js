import React from 'react'
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
  Switch,
  Slider,
  MenuItem,
  FormControl,
  Select,
  Box,
} from '@material-ui/core'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 200,
    minWidth: 250,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    minWidth: 260,
  },
  textAlign: {
    margin: '100px 150px',
  },
})

export default function DashboardComp() {
  const classes = useStyles()
  const [volume, setVolume] = React.useState('')
  const [quality, setQuality] = React.useState('normal')
  const [notification, setNotification] = React.useState({
    onlineWarning: '',
    volumeWarning: '',
    qualityWarning: '',
  })
  const [isOnline, onlineToggle] = React.useState({
    checkedA: true,
  })

  const handleOnlineStatusChange = (event) => {
    onlineToggle({ ...isOnline, [event.target.name]: event.target.checked })
    return !event.target.checked
      ? setNotification({
          ...notification,
          onlineWarning:
            "Your application is offline. You won't be able to share or stream music to other devices.",
        })
      : setNotification({ ...notification, onlineWarning: '' })
  }

  const handleVolChange = (e, v) => {
    setVolume(v)
    return v > 80
      ? setNotification({
          ...notification,
          volumeWarning:
            'Listening to music at a high volume could cause long-term hearing loss.',
        })
      : setNotification({ ...notification, volumeWarning: '' })
  }

  const handleQualityChange = (event) => {
    setQuality(event.target.value)
    return event.target.value === 'low'
      ? setNotification({
          ...notification,
          qualityWarning:
            'Music quality is degraded. Increase quality if your connection allows it.',
        })
      : setNotification({ ...notification, qualityWarning: '' })
  }

  const renderAlertMsg = () => {
    if (!isOnline.checkedA || volume > 80 || quality === 'low') {
      return (
        <h3 style={{ color: 'red' }}>
          Alert(s): <hr />
        </h3>
      )
    } else {
      return ''
    }
  }

  return (
    <div>
      <Box
        component="span"
        m={10}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Online Mode
            </Typography>
            <Typography>
              Is this application connected to the internet?
            </Typography>
          </CardContent>
          <CardActions>
            <Switch
              checked={isOnline.checkedA}
              onChange={handleOnlineStatusChange}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Volume
            </Typography>
          </CardContent>
          <CardActions>
            <VolumeDownIcon />
            <Slider
              Value={volume}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleVolChange}
              step={10}
              marks
              min={0}
              max={100}
            />
            <VolumeUpIcon />
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Sound Quality
            </Typography>
            <Typography>
              Manually control the music quality in event of poor connection
            </Typography>
          </CardContent>
          <CardActions>
            <FormControl className={classes.formControl}>
              <Select value={quality} onChange={handleQualityChange}>
                <MenuItem value={'low'}>Low</MenuItem>
                <MenuItem value={'normal'}>Normal</MenuItem>
                <MenuItem value={'high'}>High</MenuItem>
              </Select>
            </FormControl>
          </CardActions>
        </Card>
        <Typography
          variant="h5"
          style={{ marginTop: 0 }}
          className={classes.textAlign}
          color="primary"
        >
          {renderAlertMsg()}
          <Typography variant="h6">{notification.volumeWarning}</Typography>
          <Typography variant="h6">{notification.qualityWarning}</Typography>
          <Typography variant="h6">{notification.onlineWarning}</Typography>
        </Typography>
      </Box>
    </div>
  )
}
