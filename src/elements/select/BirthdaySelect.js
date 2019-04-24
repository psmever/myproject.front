import React from "react";
import _ from 'lodash';
import * as Helper from 'lib/Helper';

export const BirthdaySelect = ({
    handleOnchange,
    selectvalue_birthyear,
    selectvalue_userbirthmonth,
    selectvalue_userbirthday
}) => {

    var today = new Date();
    return (
        <div>
                        <select className="selectpicker"
                            name="user_birth_year"
                            onChange = {handleOnchange}
                            value={selectvalue_birthyear}
                        >
                            <option key='' value=''>선택</option>
                            { _.range(1950, today.getFullYear() + 1).map(value => <option key={value} value={value}>{value}</option>) }
                        </select>
                        <select className="selectpicker"
                            name="user_birth_month"
                            onChange = {handleOnchange}
                            value={selectvalue_userbirthmonth}
                        >
                            <option key='' value=''>선택</option>
                            { _.range(1, 12 + 1).map(value => <option key={value} value={Helper.numberPad(value, 2)}>{value}</option>) }
                        </select>
                        <select className="selectpicker"
                            name="user_birth_day"
                            onChange = {handleOnchange}
                            value={selectvalue_userbirthday}
                        >
                            <option key='' value=''>선택</option>
                            { _.range(1, 31 + 1).map(value => <option key={value} value={Helper.numberPad(value, 2)}>{value}</option>) }
                        </select>
        </div>
    );
};