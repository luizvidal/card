import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpg',
      username: 'nature',
      content: 'Saw this awesome tree today.',
    },
    {
      title: 'Mountains',
      imageUrl: 'assets/mountain.jpg',
      username: 'mountainlover',
      content: 'Here is a picture of a mountain',
    },
    {
      title: 'Moutain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'naturebiking1222',
      content: 'I did some biking today!',
    },
    {
      title: 'Beach',
      imageUrl:
        'https://media.nationalgeographic.org/assets/photos/000/267/26734_c25-0-964-743_r800x633.jpg?c816ed0308ccc31a13f7c2113c697f9bd40ae230',
      username: 'beachfan154',
      content: 'I went to the beach today!',
    },
    {
      title: 'Lake visit',
      imageUrl:
        'https://media.cntraveler.com/photos/5eb1cdd479397e1bac70bdf3/master/w_4032,h_2688,c_limit/Crater-Lake-GettyImages-1158150928.jpg',
      username: '4juni14',
      content: 'I visited a lake yesterday!',
    },
  ];
}
