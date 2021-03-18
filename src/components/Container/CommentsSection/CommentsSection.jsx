import React from 'react';
import { Timer } from '../../common/Timer';
import Button from '../../common/Button';

const CommentsSection = ({ time }) => {

    return (
        <section>
            <div >
                <div>
                    <Timer time={time}/>
                </div>
                <div>
                    <Button />
                </div>
                <div >
                    Comments
                </div>
            </div>
        </section>
    )
};

export default CommentsSection;