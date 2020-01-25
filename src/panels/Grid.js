import React, { useState, useEffect } from 'react';

import Header from "../Components/Header";
import Bottom from "../Components/Bottom";

import GridEventList from "../Components/GridEventList";

import '../ResetBrowser.css';
import './panelsStyle/Grid.css';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

const Grid = ({id, go}) => {
    const dataset = [
        {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        }, {
            img: "https://i.pinimg.com/originals/e3/89/6d/e3896d1dc767e954f3abc1ff359e8445.jpg"
        },
    ];

    let ZZZ = 18;
    let countZ = 1;

    const [dataEvents, setDataEvents] = useState(dataset.slice(0,ZZZ));

    const uploadData = e => {
        let elem = e.currentTarget;
        if (elem.scrollHeight - elem.clientHeight*2 <= elem.scrollTop) {
            try {
                let a = dataEvents.slice();
                setDataEvents(a.concat(dataset.slice(ZZZ*countZ, (ZZZ*(countZ+1) < dataset.length) ? ZZZ*(countZ+1) : dataset.length)));
                console.log(dataEvents.length);
            }
            catch (err) {
                console.log(err);
            }
        }
    };

    useEffect(() => {
        async function refreshHeaderVK() {
            document.getElementById(id).children[0].style.paddingTop = 0;
        }
        refreshHeaderVK();
    }, []);

    return (
        <Panel id={id}>
            <Header text={id}/>

                <div className="Grid-eventList" onScroll={uploadData}>
                    {dataEvents &&
                        <GridEventList data={dataEvents}/> }
                </div>

            <Bottom go={go}/>
        </Panel>
    );
}

export default Grid;
