
export default (row, globals) => ({

    'display': 'flex',
    'justify-content': 'space-between',

    column: column => {

        console.log(row, column)

        return {
            'color': 'red',
            //'flex' : '1',
            'width': width => {
                return '20%'
            }
        }
    }
});