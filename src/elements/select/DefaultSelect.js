import React from "react";

export const DefaultSelect = ({ handleOnchange, selectValue, optionData }) => {
    return (
                        <select className="selectpicker"
                            name="user_gender"
                            onChange = {handleOnchange}
                            value={selectValue}
                        >
                            <option key='' value=''>선택</option>
                            {
                                optionData.map((item) => {
                                    return (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    )

                                })
                            }
                        </select>
    );
};