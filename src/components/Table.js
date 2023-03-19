import React from 'react';

const Table = (props) => {

    function charCount(props) {
        const arr1 = [];
        const val = props.tableValue;
        const valCase = val.toLowerCase();
        const len = props.tableValue.length;

        let count = 0;

        if (valCase !== " ") {
            for (let i = 0; i < len; i++) {
                if (valCase[i] !== ' ') {
                    for (let j = 0; j < len; j++) {
                        if (valCase[i] === valCase[j]) {
                            count += 1;
                        }
                    }
                    if (arr1.indexOf(valCase[i]) === -1) {
                        arr1.push(valCase[i], count);
                    }
                    count = 0;
                }
            }
        }

        function sliceArray(arr1, chunkSize) {
            const res = [];
            for (let i = 0; i < arr1.length; i += chunkSize) {
                const chunk = arr1.slice(i, i + chunkSize);
                res.push(chunk);
            }
            return res;
        }
        let arr2 = sliceArray(arr1, 2)

        let tableRows = null;

        if (arr1) {
            tableRows = <tbody>
                {arr2.map((items, index) => {
                    return (
                        <tr key={index}>
                            {items.map((subItems, sIndex) => {
                                return <td key={sIndex}> {subItems} </td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        }
        return tableRows;
    }

    const tableContent = charCount(props);

    return (
        <div>
            <h5 className='table_caption'>Following is an example of a result that shows occurences/count:</h5>
            <table>
                <thead>
                    <tr>
                        <th>Character</th>
                        <th>Count</th>
                    </tr>
                </thead>
                {tableContent}
            </table>
        </div>
    );
}
export default Table;

// TO DO
// 2. delete rows option - clear table contents
// 7. table rows should display on click of button only - DONE
// 9. table contents changing dynamically on adding/removing (only onclick of button the contents should show)
// onChange?