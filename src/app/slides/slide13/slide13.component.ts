import { Component } from '@angular/core';
import * as d3 from 'd3-shape';


@Component({
  selector: 'app-slide13',
  templateUrl: './slide13.component.html',
  styleUrls: ['./slide13.component.sass']
})
export class Slide13Component {

  fakeData = [
    {
      'name': 'Example',
      'series': [
        {
          'name': 'Charmander',
          'value': 7300000
        },
        {
          'name': 'Bulbasaur',
          'value': 300000
        },
        {
          'name': 'Mewtwo',
          'value': 8940000
        },
        {
          'name': 'Pikachu',
          'value': 3000009
        },
        {
          'name': 'Perl6',
          'value': 8940000
        }
      ]
    }
  ];


  view: any[] = [1800, 700];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Pokemon';
  showYAxisLabel = true;
  yAxisLabel = 'Utility';
  curve = d3.curveCardinal.tension(.3);

  colorScheme = {
    domain: [ '#FFF' ]
  };

  // line, area
  autoScale = true;

  constructor() {}

  onSelect(event) {
    console.log(event);
  }

}
