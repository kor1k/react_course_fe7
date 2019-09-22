import React from 'react'

export default class City extends React.Component {

    state = {
        data: null
    }

    componentDidMount() {
        const {id} = this.props.match.params.city
    }


    render() {
        if (!data) {
            return null;
        }
        return (
            <>
                <p>City ID: {id}</p>
            </>
        )
    }
};


/*                                  HOME WORK
    1. /home -> tell about this app
    2.list with some cities: Kyiv, London, Moscow...
    3. Show from API some data on page!
    4.cities are Links .../city/city_name
    5. Add loader
    6. Real time data update.
*/