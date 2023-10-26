import React from 'react';
import { AddChannel } from '../assets';

const TeamChannelList = ({ children, error = false, loading, type}) => {
    if (error){
        return type === 'team' ? (
            <div className ='team-channel-list'>
                <p className='team-channel-list__message '>
                    Connection error, please wait a moment and try again.
                </p>
            </div>

        ):null
    }

    if (loading){
            <div className ='team-channel-list'>
                <p className='team-channel-list__message laoding'>
                    {type === 'team' ? 'Channels' : 'Messages'} loading...
                </p>
            </div>
        return
    }
    return (
        <div className='team-channel-list'>
            <div className='team-channel-list__header'>
                <p1 className= 'team-chanel-list__header__title'>
                    { type === 'team' ? 'Channels' : 'Direct Messages'}

                </p1>
            </div>
            {children}
        </div>
    );
};

export default TeamChannelList;
