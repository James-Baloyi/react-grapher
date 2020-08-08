import React from 'react';
import './App.css';

class Grapher extends React.Component{

    getLargest(array){
        var benchmark = 0;
        array.map(value => {
            if(value > benchmark){
                benchmark = value;
            }
        });
        return benchmark;
    }

    render(){
        var json_data = this.props.json;
        var xlabel = json_data.x.label;
        var ylabel = json_data.y.label;
        var xdata = json_data.x.data;
        var largest_value = this.getLargest(xdata);
        var ydata = json_data.y.data;
        var bg_colours = json_data.x.bg_colours;
        
            var spacer = 80;
            var i = 1;
            var x = 0;
            var y = 0;
            var graphs = xdata.map(entry => {
            var height = entry/largest_value*290;
            return (
            <div title={entry} className='bar' key={entry} style={{backgroundColor: bg_colours[y++], height: height, marginLeft: spacer * i++}}>
                <p className='bar-name'>{ydata[x++]}</p>
            </div>);
            });

        return(
            <div className='graph-parent'>
                <h2>{this.props.title}</h2>
                    <div className='graph'>
                        
                        <p className='x-label'>{xlabel}</p>
                        <p className='y-label'>{ylabel}</p>

                        {graphs}

                    </div>
            </div>
        );
    }
}

export default Grapher;