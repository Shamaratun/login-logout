import { Component } from '@angular/core';

@Component({
  selector: 'app-book-detaild',
  imports: [],
  templateUrl: './book-detaild.component.html',
  styleUrl: './book-detaild.component.css'
})
export class BookDetaildComponent {
  book = {
    title: 'দূরবীন',
    format: 'হার্ডকভার',
    description: 'দুইয়ের দশকের শেষ ভাগ থেকে শুরু করে আটের দশক পর্যন্ত সামাজিক জীবনের যাবতীয় পরিবর্তন বিস্তৃত সময়ের প্ৰেক্ষাপটে রচিত',
    author: { name: 'শীর্ষেন্দু মুখোপাধ্যায়ক', link: '/book/author/2546/শীর্ষেন্দু-মুখোপাধ্যায়' },
    category: { name: 'পশ্চিমবঙ্গের উপন্যাস', link: '/book/category/1546/novel-west-bengal' },
    ratings: 4.8,
    ratingCount: 63,
    reviewCount: 25,
    usersWantCount: 373,
    flapText: 'সাপ্তাহিক ‘দেশ’ পত্রিকায় দু-বছরেরও বেশি কাল ধরে ধারাবাহিকভাবে বেরিয়েছিল ‘দূরবীন, শীর্ষেন্দু মুখোপাধ্যায়ের জোরালো, সংবেদনশীল কলমে অন্যতম ..',
    price: {
      original: 1350,
      discounted: 1169,
      savings: 181,
      savingsPercent: 13
    },
    stock: 27,
    offer: 'ঈদ উৎসবে ৭৫০৳+ অর্ডারে ১০০৳ কুপন, ঘরের বাজার পন্যে ১০% ছাড় ও দৈবচয়নে জিতে নিন ২৫ কেজি আম উপহার 😍',
    images: {
      cover: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/9265ddfefc44_43691.gif',
      readMeIcon: '/_next/static/media/readMe.5150d5b3.png',
      originalBadge: '/_next/static/media/original-badge.f73f258c.png',
      usersIcon: '/_next/static/media/rok-icon-users.4dd03c32.svg',
      offerTag: '/_next/static/media/tag_icon.fa1ccff6.png',
      cartIcon: '/_next/static/media/cart-icon-white.0bee8f38.svg'
    }
  };
}

