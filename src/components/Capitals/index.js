import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeid: countryAndCapitalsList[0].id}

  onCountryChange = event => {
    this.setState({activeid: event.target.value})
  }

  getCountry = () => {
    const {activeid} = this.state
    const activeCountry = countryAndCapitalsList.find(
      eachitem => eachitem.id === activeid,
    )
    console.log(activeCountry)

    return activeCountry.country
  }

  render() {
    const {activeid} = this.state

    const country = this.getCountry(activeid)

    return (
      <div className="main-container">
        <div className="capitial-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="selection-container">
            <select
              className="select-panel"
              value={activeid}
              onChange={this.onCountryChange}
            >
              {countryAndCapitalsList.map(eachitem => (
                <option
                  key={eachitem.id}
                  value={eachitem.id}
                  className="options"
                >
                  {eachitem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country-para">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
