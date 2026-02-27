export const translations = {
  ru: {
    lang: 'ru',
    skipLink: 'Перейти к основному содержанию',

    nav: {
      services: 'УСЛУГИ',
      contacts: 'КОНТАКТЫ',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
    },

    hero: {
      title1: 'уборка, вынос мусора,',
      title2: 'сантехника и электрика',
      subtitle: 'Профессиональные коммунальные услуги для вашего дома в Зарафшане',
      cta: 'Связаться с нами',
    },

    pricing: {
      heading: 'Наши тарифы',
      monthlyLabel: 'Ежемесячный тариф',
      monthlyPrice: 'от 55 000 сум',
      yearlyLabel: 'Годовой VIP тариф',
      yearlyPrice: '500 000 сум',
      yearlyBadge: 'Выгодно',
    },

    howItWorks: {
      learnMore: 'Узнайте больше о нас',
      heading: 'Как это работает',
      steps: [
        { title: 'Свяжитесь с нами по телефону' },
        { title: 'Укажите адрес и выберите подходящий тариф', subtitle: 'мы согласуем все детали' },
        { title: 'Оформите подписку или разовый вызов' },
        { title: 'Наши специалисты приедут в назначенное время' },
        { title: 'Наслаждайтесь чистотой и порядком в вашем доме' },
      ],
    },

    tariffs: {
      heading: 'Тарифные планы',
      recommended: 'Рекомендуем',
      vipBadge: 'VIP',
      items: [
        {
          title: 'Базовый',
          subtitle: 'Ежемесячный',
          price: '55 000 сум/мес',
          features: [
            'Уборка подъезда',
            'Вынос мусора через день',
            'Сантехник — вызов 1 раз',
            'Электрик — вызов 1 раз',
            'Мусорный пакет за счёт организации',
          ],
        },
        {
          title: 'Премиум',
          subtitle: 'Ежемесячный',
          price: '75 000 сум/мес',
          recommended: true,
          features: [
            'Уборка подъезда',
            'Вынос мусора каждый день',
            'Сантехник — вызов 2 раза',
            'Электрик — вызов 2 раза',
            'Мусорный пакет за счёт организации',
          ],
        },
        {
          title: 'Годовой VIP',
          subtitle: 'Годовая подписка',
          price: '500 000 сум/год',
          vip: true,
          features: [
            'Уборка подъезда',
            'Вынос мусора каждый день',
            'Сантехник — безлимитный',
            'Электрик — безлимитный',
            'Мусорный пакет за счёт организации',
            'Продукция YAPRAK по цене завода',
            'Доставка БЕСПЛАТНАЯ',
            'Продукция партнёров по себестоимости',
          ],
        },
      ],
    },

    services: {
      heading: 'Разовые услуги',
      materialsNote: 'Имеются свои материалы',
      electrician: {
        title: 'Электрик',
        items: [
          { name: 'Установка розетки', price: '30 000 сум' },
          { name: 'Установка выключателей', price: '30 000 сум' },
          { name: 'Установка света', price: '30 000 сум' },
          { name: 'Устранение замыкания', price: '30 000 сум' },
        ],
      },
      plumber: {
        title: 'Сантехник',
        items: [
          { name: 'Установка трубы', price: '40 000 сум' },
          { name: 'Установка раковины', price: '40 000 сум' },
          { name: 'Установка батареи', price: '40 000 сум' },
          { name: 'Установка ванны', price: '40 000 сум' },
          { name: 'Установка вентилей', price: '40 000 сум' },
          { name: 'Установка смесителей', price: '30 000 сум' },
          { name: 'Установка шлангов', price: '40 000 сум' },
        ],
      },
    },

    serviceAreas: {
      heading: 'Зона обслуживания',
      mapPlaceholder: 'Карта районов обслуживания',
      cta: 'Связаться с нами',
    },

    faq: {
      heading: 'Частые вопросы',
      items: [
        { q: 'Какие услуги вы предоставляете?', a: 'Мы предоставляем уборку подъездов, ежедневный вынос мусора, услуги сантехника и электрика. Также предлагаем выгодные подписки с комплексным обслуживанием.' },
        { q: 'Сколько стоит ежемесячная подписка?', a: 'Базовый тариф — 55 000 сум/мес (вынос мусора через день, 1 вызов сантехника и электрика). Премиум — 75 000 сум/мес (ежедневный вынос, 2 вызова). Годовой VIP — 500 000 сум/год с безлимитным обслуживанием.' },
        { q: 'Что входит в годовой VIP тариф?', a: 'Уборка подъезда, ежедневный вынос мусора, безлимитные вызовы сантехника и электрика, мусорные пакеты за наш счёт, продукция YAPRAK по цене завода с бесплатной доставкой, а также продукция партнёров по себестоимости без наценок.' },
        { q: 'Можно ли вызвать мастера разово?', a: 'Да, вы можете вызвать электрика или сантехника разово без подписки. Стоимость от 30 000 сум за услугу. Наши специалисты работают со своими материалами.' },
        { q: 'В каком районе вы работаете?', a: 'Мы работаем в городе Зарафшан, Навоийская область, Узбекистан.' },
        { q: 'Как с вами связаться?', a: 'Позвоните нам по номеру +998 88 593-58-59 или напишите в Instagram. Мы быстро ответим и согласуем все детали.' },
        { q: 'Мусорные пакеты входят в стоимость?', a: 'Да, во всех тарифах мусорные пакеты предоставляются за счёт нашей организации.' },
      ],
    },

    about: {
      paragraphs: [
        'MCHJ «MERCURY RETAIL GROUP» — это надёжная компания, предоставляющая комплексные коммунальные услуги для жителей города Зарафшан. Мы берём на себя уборку подъездов, вынос бытового мусора, а также услуги профессиональных сантехников и электриков.',
        'Мы понимаем, насколько важно, чтобы ваш дом и подъезд были чистыми и ухоженными. Наши специалисты работают аккуратно и ответственно, чтобы вы могли наслаждаться комфортом каждый день.',
        'Выбирая наши тарифы, вы получаете полный комплекс услуг по доступным ценам. VIP-абоненты годового тарифа пользуются особыми привилегиями: безлимитные вызовы мастеров, продукция YAPRAK по цене завода с бесплатной доставкой и товары партнёров по себестоимости.',
        'Наша цель — сделать вашу жизнь проще и комфортнее. Доверьте бытовые хлопоты профессионалам и освободите время для того, что действительно важно — семьи, друзей и любимых дел.',
      ],
      cta: 'Связаться с нами',
    },

    footer: {
      contacts: 'Контакты',
      requisites: 'Реквизиты',
      address: 'Адрес',
      socials: 'Мы в соцсетях',
      addressText: 'Республика Узбекистан, Навоийская область, г. Зарафшан, Bahor MFY, 13 mttit tuman dacha, дом 6',
      companyName: 'MCHJ «MERCURY RETAIL GROUP»',
      inn: '312043311',
      phone: '+998 88 593-58-59',
      links: {
        terms: 'Пользовательское соглашение',
        privacy: 'Политика конфиденциальности',
      },
    },

    cookie: {
      ariaLabel: 'Уведомление о cookies',
      text: 'Мы используем файлы cookies для улучшения работы сайта. Оставаясь на нашем сайте, вы соглашаетесь с условиями использования файлов cookies.',
      link: 'здесь',
      accept: 'Принять',
    },

    contactForm: {
      title: 'Оставить заявку',
      name: 'Ваше имя',
      phone: 'Телефон',
      message: 'Сообщение (необязательно)',
      submit: 'Отправить заявку',
      sending: 'Отправляем...',
      success: 'Заявка отправлена! Мы скоро свяжемся с вами.',
      error: 'Ошибка при отправке. Попробуйте ещё раз или позвоните нам.',
      close: 'Закрыть',
    },

    backToTop: 'Наверх',
  },

  uz: {
    lang: 'uz',
    skipLink: 'Asosiy mazmun',

    nav: {
      services: 'XIZMATLAR',
      contacts: 'KONTAKTLAR',
      openMenu: 'Menyuni ochish',
      closeMenu: 'Menyuni yopish',
    },

    hero: {
      title1: 'tozalash, chiqindi chiqarish,',
      title2: 'santexnika va elektrika',
      subtitle: 'Zarafshonda uyingiz uchun professional kommunal xizmatlar',
      cta: 'Biz bilan bog\'lanish',
    },

    pricing: {
      heading: 'Bizning tariflar',
      monthlyLabel: 'Oylik tarif',
      monthlyPrice: '55 000 so\'m dan',
      yearlyLabel: 'Yillik VIP tarif',
      yearlyPrice: '500 000 so\'m',
      yearlyBadge: 'Foydali',
    },

    howItWorks: {
      learnMore: 'Biz haqimizda ko\'proq',
      heading: 'Qanday ishlaydi',
      steps: [
        { title: 'Bizga telefon orqali bog\'laning' },
        { title: 'Manzilni ko\'rsating va mos tarifni tanlang', subtitle: 'biz barcha tafsilotlarni kelishamiz' },
        { title: 'Obuna yoki bir martalik chaqiruv rasmiylating' },
        { title: 'Mutaxassislarimiz belgilangan vaqtda keladi' },
        { title: 'Uyingizdagi tozalik va tartibdan bahramand bo\'ling' },
      ],
    },

    tariffs: {
      heading: 'Tarif rejalar',
      recommended: 'Tavsiya',
      vipBadge: 'VIP',
      items: [
        {
          title: 'Bazaviy',
          subtitle: 'Oylik',
          price: '55 000 so\'m/oy',
          features: [
            'Kirish joyini tozalash',
            'Kun oralab chiqindi chiqarish',
            'Santexnik — 1 marta chaqiruv',
            'Elektrik — 1 marta chaqiruv',
            'Chiqindi paketlari tashkilot hisobiga',
          ],
        },
        {
          title: 'Premium',
          subtitle: 'Oylik',
          price: '75 000 so\'m/oy',
          recommended: true,
          features: [
            'Kirish joyini tozalash',
            'Har kuni chiqindi chiqarish',
            'Santexnik — 2 marta chaqiruv',
            'Elektrik — 2 marta chaqiruv',
            'Chiqindi paketlari tashkilot hisobiga',
          ],
        },
        {
          title: 'Yillik VIP',
          subtitle: 'Yillik obuna',
          price: '500 000 so\'m/yil',
          vip: true,
          features: [
            'Kirish joyini tozalash',
            'Har kuni chiqindi chiqarish',
            'Santexnik — cheksiz',
            'Elektrik — cheksiz',
            'Chiqindi paketlari tashkilot hisobiga',
            'YAPRAK mahsulotlari zavod narxida',
            'Yetkazib berish BEPUL',
            'Hamkorlar mahsulotlari tannarxda',
          ],
        },
      ],
    },

    services: {
      heading: 'Bir martalik xizmatlar',
      materialsNote: 'O\'z materiallari mavjud',
      electrician: {
        title: 'Elektrik',
        items: [
          { name: 'Rozetka o\'rnatish', price: '30 000 so\'m' },
          { name: 'Kalit o\'rnatish', price: '30 000 so\'m' },
          { name: 'Chiroq o\'rnatish', price: '30 000 so\'m' },
          { name: 'Qisqa tutashuvni bartaraf etish', price: '30 000 so\'m' },
        ],
      },
      plumber: {
        title: 'Santexnik',
        items: [
          { name: 'Quvur o\'rnatish', price: '40 000 so\'m' },
          { name: 'Lavabo o\'rnatish', price: '40 000 so\'m' },
          { name: 'Batareya o\'rnatish', price: '40 000 so\'m' },
          { name: 'Vanna o\'rnatish', price: '40 000 so\'m' },
          { name: 'Ventil o\'rnatish', price: '40 000 so\'m' },
          { name: 'Aralashtirgich o\'rnatish', price: '30 000 so\'m' },
          { name: 'Shlang o\'rnatish', price: '40 000 so\'m' },
        ],
      },
    },

    serviceAreas: {
      heading: 'Xizmat ko\'rsatish hududi',
      mapPlaceholder: 'Xizmat ko\'rsatish hududlari xaritasi',
      cta: 'Biz bilan bog\'lanish',
    },

    faq: {
      heading: 'Ko\'p beriladigan savollar',
      items: [
        { q: 'Qanday xizmatlar ko\'rsatasiz?', a: 'Biz kirish joylarini tozalash, har kunlik chiqindi chiqarish, santexnik va elektrik xizmatlarini taqdim etamiz. Shuningdek, kompleks xizmat ko\'rsatish bilan foydali obunalar taklif qilamiz.' },
        { q: 'Oylik obuna qancha turadi?', a: 'Bazaviy tarif — 55 000 so\'m/oy (kun oralab chiqindi chiqarish, santexnik va elektrik 1 marta). Premium — 75 000 so\'m/oy (har kuni chiqarish, 2 marta chaqiruv). Yillik VIP — 500 000 so\'m/yil cheksiz xizmat bilan.' },
        { q: 'Yillik VIP tarifga nima kiradi?', a: 'Kirish joyini tozalash, har kunlik chiqindi chiqarish, cheksiz santexnik va elektrik chaqiruvlari, chiqindi paketlari bizning hisobimizga, YAPRAK mahsulotlari zavod narxida bepul yetkazib berish bilan, hamda hamkorlar mahsulotlari tannarxda ustama narxsiz.' },
        { q: 'Ustani bir martalik chaqirish mumkinmi?', a: 'Ha, obunasiz ham elektrik yoki santexnikni bir martalik chaqirishingiz mumkin. Narxi bir xizmat uchun 30 000 so\'m dan. Mutaxassislarimiz o\'z materiallari bilan ishlaydi.' },
        { q: 'Qaysi hududda ishlaysiz?', a: 'Biz Zarafshon shahrida, Navoiy viloyati, O\'zbekistonda ishlaymiz.' },
        { q: 'Siz bilan qanday bog\'lanish mumkin?', a: '+998 88 593-58-59 raqamiga qo\'ng\'iroq qiling yoki Instagram orqali yozing. Tez javob beramiz va barcha tafsilotlarni kelishamiz.' },
        { q: 'Chiqindi paketlari narxga kiradimi?', a: 'Ha, barcha tariflarda chiqindi paketlari tashkilotimiz hisobiga taqdim etiladi.' },
      ],
    },

    about: {
      paragraphs: [
        'MCHJ «MERCURY RETAIL GROUP» — Zarafshon shahri aholisi uchun kompleks kommunal xizmatlar ko\'rsatuvchi ishonchli kompaniya. Biz kirish joylarini tozalash, maishiy chiqindilarni chiqarish, shuningdek professional santexnik va elektrik xizmatlarini o\'z zimmamizga olamiz.',
        'Biz uyingiz va kirish joyingiz toza va yaxshi parvarish qilingan bo\'lishi qanchalik muhimligini tushunamiz. Mutaxassislarimiz ehtiyotkorlik va mas\'uliyat bilan ishlaydi, shunda siz har kuni qulaylikdan bahramand bo\'lasiz.',
        'Bizning tariflarni tanlagan holda, siz arzon narxlarda to\'liq xizmatlar kompleksini olasiz. Yillik tarifning VIP-obunachilari alohida imtiyozlardan foydalanadi: cheksiz usta chaqiruvlari, YAPRAK mahsulotlari zavod narxida bepul yetkazib berish va hamkorlar tovarlari tannarxda.',
        'Bizning maqsadimiz — hayotingizni sodda va qulay qilish. Maishiy tashvishlarni mutaxassislarga topshiring va haqiqatan ham muhim narsa — oila, do\'stlar va sevimli mashg\'ulotlar uchun vaqt ajrating.',
      ],
      cta: 'Biz bilan bog\'lanish',
    },

    footer: {
      contacts: 'Kontaktlar',
      requisites: 'Rekvizitlar',
      address: 'Manzil',
      socials: 'Ijtimoiy tarmoqlar',
      addressText: 'O\'zbekiston Respublikasi, Navoiy viloyati, Zarafshon shahri, Bahor MFY, 13 mttit tuman dacha, 6-uy',
      companyName: 'MCHJ «MERCURY RETAIL GROUP»',
      inn: '312043311',
      phone: '+998 88 593-58-59',
      links: {
        terms: 'Foydalanuvchi shartnomasi',
        privacy: 'Maxfiylik siyosati',
      },
    },

    cookie: {
      ariaLabel: 'Cookie haqida bildirishnoma',
      text: 'Biz sayt ishlashini yaxshilash uchun cookie fayllaridan foydalanamiz. Saytimizda qolish orqali siz cookie fayllaridan foydalanish shartlariga rozilik bildirasiz.',
      link: 'bu yerda',
      accept: 'Qabul qilish',
    },

    contactForm: {
      title: 'Ariza qoldirish',
      name: 'Ismingiz',
      phone: 'Telefon',
      message: 'Xabar (ixtiyoriy)',
      submit: 'Ariza yuborish',
      sending: 'Yuborilmoqda...',
      success: 'Ariza yuborildi! Tez orada siz bilan bog\'lanamiz.',
      error: 'Yuborishda xatolik. Qayta urinib ko\'ring yoki bizga qo\'ng\'iroq qiling.',
      close: 'Yopish',
    },

    backToTop: 'Tepaga',
  },
};
