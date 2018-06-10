// @flow
import React from 'react'
import oscar from '../../static/icons/oscar.png';
import globe from '../../static/icons/globe.png';

type Props={
    nnoscars:number,
    nwoscars:number,
    nnglobes:number,
    nwglobes:number,
    awardsT:string
}

const DetailPrizes=({nnoscars,nwoscars,nnglobes,nwglobes,awardsT}:Props)=>{
    return(
        (nnoscars>0 || nnglobes>0)?
            <div>
                <div style={{marginTop:10}}>
                    <span className={'titolino'}>{awardsT}</span>
                </div>
                {nnoscars>0?
                    <div className={'prizesdetail'}>
                        <span className={'rispostinaina'}>Oscars:&nbsp;&nbsp;</span>
                        <span className={'rispostinaina'}>{nwoscars+'x'}</span>
                        &nbsp;
                        <div><img alt={'oscar'} src={oscar} height={40}/></div>
                        &nbsp;
                        <span className={'rispostinainaina'}>{'('+nnoscars+' nomination(s))'}</span>
                    </div>:''
                }
                {nnglobes>0?
                    <div className={'prizesdetail'}>
                        <span className={'rispostinaina'}>Golden Globes:&nbsp;&nbsp;</span>
                        <span className={'rispostinaina'}>{nwglobes+'x'}</span>
                        &nbsp;
                        <div><img alt={'globe'} src={globe} height={40}/></div>
                        &nbsp;
                        <span className={'rispostinainaina'}>{'('+nnglobes+' nomination(s))'}</span>
                    </div>:''
                }
            </div>:
            <div/>
    );
};

export default DetailPrizes;