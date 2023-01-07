let usaStates = [ 'VA', 'MD', 'DC', 'WV', 'DE', 'PA', 'NY', 'NJ', 'CT', 'MA', 'NH', 'ME', 'VT', 'RI', 'NC', 'SC', 'GA', 'FL', 'OH', 'MI', 'IN', 'KY', 'TN', 'AL', 'MS', 'AR', 'LA', 'TX', 'OK', 'KS', 'MO', 'IA', 'MN', 'WI', 'IL', 'NE', 'SD', 'ND', 'MT', 'WY', 'CO', 'NM', 'AZ', 'UT', 'ID', 'WA', 'OR', 'CA', 'NV', 'AK', 'HI']
//refactor states to be an array of objects with value and label properties
usaStates = usaStates.map(state => { return { value: state, label: state } })

export default usaStates;