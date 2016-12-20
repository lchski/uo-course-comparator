import React from 'react';

class CourseFilters extends React.Component {
  render() {
    return (
      <div className="ph2 pv3 bg-light-gray mt4">
        <h3 className="mt0">Filters</h3>

        <div className="measure black-80 mt3">
          <label className="f6 b db" htmlFor="search">Search</label>
          <input
            className="input-reset ba b--black-20 ph2 pv1 mt2 db w-100 f6 sans-serif"
            type="text"
            id="search"
            placeholder="Search for terms related to your interests"
            value={this.props.activeFilters.search}
            onChange={(e) => this.props.alterFilterState(
              'UPDATE_SEARCH',
              {
                value: e.target.value
              }
            )}
          />
        </div>

        <div className="measure black-80 mt3">
          <p className="f6 b db ma0">Language</p>

          <div className="inline-flex items-center mr2 mt2">
            <label htmlFor="language--english" className="mr1 lh-copy f6">English</label>
            <input
              type="checkbox"
              name="language"
              id="language--english"
              checked={this.props.activeFilters.language.indexOf('english') !== -1}
              onChange={(e) => this.props.alterFilterState(
                'UPDATE_LANGUAGE',
                {
                  language: 'english',
                  value: e.target.checked
                }
              )}
            />
          </div>

          <div className="inline-flex items-center mr2 mt2">
            <label htmlFor="language--french" className="mr1 lh-copy f6">French</label>
            <input
              type="checkbox"
              name="language"
              id="language--french"
              checked={this.props.activeFilters.language.indexOf('french') !== -1}
              onChange={(e) => this.props.alterFilterState(
                'UPDATE_LANGUAGE',
                {
                  language: 'french',
                  value: e.target.checked
                }
              )}
            />
          </div>
        </div>

        <div className="measure black-80 mt3">
          <p className="f6 b db ma0">Year</p>

          <div className="inline-flex items-center mr2 mt2">
            <label htmlFor="year--1" className="mr1 lh-copy f6">1</label>
            <input
              type="checkbox"
              name="year"
              id="year--1"
              checked={this.props.activeFilters.year.indexOf('1') !== -1}
            />
          </div>

          <div className="inline-flex items-center mr2 mt2">
            <label htmlFor="year--2" className="mr1 lh-copy f6">2</label>
            <input
              type="checkbox"
              name="year"
              id="year--2"
              checked={this.props.activeFilters.year.indexOf('2') !== -1}
            />
          </div>

          <div className="inline-flex items-center mr2 mt2">
            <label htmlFor="year--3" className="mr1 lh-copy f6">3</label>
            <input
              type="checkbox"
              name="year"
              id="year--3"
              checked={this.props.activeFilters.year.indexOf('3') !== -1}
            />
          </div>

          <div className="inline-flex items-center mr2 mt2">
            <label htmlFor="year--4" className="mr1 lh-copy f6">4</label>
            <input
              type="checkbox"
              name="year"
              id="year--4"
              checked={this.props.activeFilters.year.indexOf('4') !== -1}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CourseFilters;
