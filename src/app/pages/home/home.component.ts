import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public songCards = [
    {
      thumbnail: 'https://media.istockphoto.com/id/1488412510/photo/male-musician-playing-acoustic-guitar-behind-microphone-in-recording-studio.webp?b=1&s=170667a&w=0&k=20&c=fPMaq4K9zLIVmDcylTl-uP7aXBWjQuC0EL4hAilRTTQ=',
      title: 'Romantic Songs',
      description: 'Relax and indulge with beautiful piano'
    },
    // {
    //   thumbnail: 'https://media.istockphoto.com/id/1488412510/photo/male-musician-playing-acoustic-guitar-behind-microphone-in-recording-studio.webp?b=1&s=170667a&w=0&k=20&c=fPMaq4K9zLIVmDcylTl-uP7aXBWjQuC0EL4hAilRTTQ=',
    //   title: 'Happy Hits',
    //   description: 'Relax and indulge with beautiful piano'
    // },
    // {
    //   thumbnail: 'https://media.istockphoto.com/id/1488412510/photo/male-musician-playing-acoustic-guitar-behind-microphone-in-recording-studio.webp?b=1&s=170667a&w=0&k=20&c=fPMaq4K9zLIVmDcylTl-uP7aXBWjQuC0EL4hAilRTTQ=',
    //   title: 'Peaceful Piano',
    //   description: 'Relax and indulge with beautiful piano'
    // },
    // {
    //   thumbnail: 'https://media.istockphoto.com/id/1488412510/photo/male-musician-playing-acoustic-guitar-behind-microphone-in-recording-studio.webp?b=1&s=170667a&w=0&k=20&c=fPMaq4K9zLIVmDcylTl-uP7aXBWjQuC0EL4hAilRTTQ=',
    //   title: 'Calming Acoustic',
    //   description: 'Relax and indulge with beautiful piano'
    // },
    // {
    //   thumbnail: 'https://media.istockphoto.com/id/1488412510/photo/male-musician-playing-acoustic-guitar-behind-microphone-in-recording-studio.webp?b=1&s=170667a&w=0&k=20&c=fPMaq4K9zLIVmDcylTl-uP7aXBWjQuC0EL4hAilRTTQ=',
    //   title: 'Pop Rising',
    //   description: 'Relax and indulge with beautiful piano'
    // },
    // {
    //   thumbnail: 'https://media.istockphoto.com/id/1488412510/photo/male-musician-playing-acoustic-guitar-behind-microphone-in-recording-studio.webp?b=1&s=170667a&w=0&k=20&c=fPMaq4K9zLIVmDcylTl-uP7aXBWjQuC0EL4hAilRTTQ=',
    //   title: 'Lofi Chills',
    //   description: 'Relax and indulge with beautiful piano'
    // },
    // {
    //   thumbnail: 'https://media.istockphoto.com/id/1488412510/photo/male-musician-playing-acoustic-guitar-behind-microphone-in-recording-studio.webp?b=1&s=170667a&w=0&k=20&c=fPMaq4K9zLIVmDcylTl-uP7aXBWjQuC0EL4hAilRTTQ=',
    //   title: 'Stress Relief',
    //   description: 'Relax and indulge with beautiful piano'
    // }
  ];

  constructor() {}
  
  ngOnInit(): void {}
}
