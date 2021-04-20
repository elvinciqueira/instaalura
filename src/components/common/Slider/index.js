import React from 'react'
import Flickity from 'flickity'

export default class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      flickityReady: false,
    }

    this.refreshFlickity = this.refreshFlickity.bind(this)
  }

  componentDidMount() {
    this.flickity = new Flickity(this.flickityNode, this.props.options || {})

    this.setState({
      flickityReady: true,
    })
  }

  refreshFlickity() {
    this.flickity.reloadCells()
    this.flickity.resize()
    this.flickity.updateDraggable()
  }

  componentWillUnmount() {
    this.flickity.destroy()
  }

  componentDidUpdate(prevProps, prevState) {
    const flickityDidBecomeActive =
      !prevState.flickityReady && this.state.flickityReady
    const childrenDidChange =
      prevProps.children.length !== this.props.children.length

    if (flickityDidBecomeActive || childrenDidChange) {
      this.refreshFlickity()
    }
  }

  render() {
    return (
      <div
        className={'test'}
        key="flickityBase"
        ref={(node) => (this.flickityNode = node)}
      >
        {this.props.children}
      </div>
    )
  }
}
