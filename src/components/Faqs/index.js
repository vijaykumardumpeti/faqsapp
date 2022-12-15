// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

export default class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <h1>FAQs</h1>
        <ul className="faqs-container">
          {faqsList.map(eachObject => (
            <FaqItem key={eachObject.id} eachObject={eachObject} />
          ))}
        </ul>
      </div>
    )
  }
}
