// Write your code here.
import {Component} from 'react'
import './index.css'

export default class FaqItem extends Component {
  state = {
    isPlusButtonClicked: false,
  }

  toggleButton = () => {
    this.setState(prevState => ({
      isPlusButtonClicked: !prevState.isPlusButtonClicked,
    }))
  }

  render() {
    const {isPlusButtonClicked} = this.state

    const imageUrl = isPlusButtonClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const alt = isPlusButtonClicked ? 'minus' : 'plus'

    const {eachObject, key} = this.props
    const {questionText, answerText} = eachObject
    return (
      <li key={key} className="faq-item-container">
        <div className="sub-container-1">
          <div>
            <h1 className="question-text">{questionText}</h1>
          </div>
          <div className="minus-image">
            <button
              onClick={this.toggleButton}
              type="button"
              className="button-style"
            >
              <img className="minus-image" alt={alt} src={imageUrl} />
            </button>
          </div>
        </div>

        {isPlusButtonClicked && (
          <div className="sub-container-2">
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
