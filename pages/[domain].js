import { useRouter } from "next/router";
import Head from "next/head";
import React, { useEffect, useState } from "react";
const DomainPage = () => {
  const router = useRouter();
  // const arr = [];

  const domainName = router.query.domain;
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const arr = [
    {
      domain: "sagarjaid.ac",
      extenstion: ".ac",
    },
    {
      domain: "sagarjaid.academy",
      extenstion: ".academy",
    },
    {
      domain: "sagarjaid.accountant",
      extenstion: ".accountant",
    },
    {
      domain: "sagarjaid.accountants",
      extenstion: ".accountants",
    },
    {
      domain: "sagarjaid.actor",
      extenstion: ".actor",
    },
    {
      domain: "sagarjaid.adult",
      extenstion: ".adult",
    },
    {
      domain: "sagarjaid.ag",
      extenstion: ".ag",
    },
    {
      domain: "sagarjaid.agency",
      extenstion: ".agency",
    },
    {
      domain: "sagarjaid.ai",
      extenstion: ".ai",
    },
    {
      domain: "sagarjaid.airforce",
      extenstion: ".airforce",
    },
    {
      domain: "sagarjaid.am",
      extenstion: ".am",
    },
    {
      domain: "sagarjaid.amsterdam",
      extenstion: ".amsterdam",
    },
    {
      domain: "sagarjaid.apartments",
      extenstion: ".apartments",
    },
    {
      domain: "sagarjaid.app",
      extenstion: ".app",
    },
    {
      domain: "sagarjaid.archi",
      extenstion: ".archi",
    },
    {
      domain: "sagarjaid.army",
      extenstion: ".army",
    },
    {
      domain: "sagarjaid.art",
      extenstion: ".art",
    },
    {
      domain: "sagarjaid.asia",
      extenstion: ".asia",
    },
    {
      domain: "sagarjaid.associates",
      extenstion: ".associates",
    },
    {
      domain: "sagarjaid.at",
      extenstion: ".at",
    },
    {
      domain: "sagarjaid.attorney",
      extenstion: ".attorney",
    },
    {
      domain: "sagarjaid.au",
      extenstion: ".au",
    },
    {
      domain: "sagarjaid.auction",
      extenstion: ".auction",
    },
    {
      domain: "sagarjaid.auto",
      extenstion: ".auto",
    },
    {
      domain: "sagarjaid.autos",
      extenstion: ".autos",
    },
    {
      domain: "sagarjaid.baby",
      extenstion: ".baby",
    },
    {
      domain: "sagarjaid.band",
      extenstion: ".band",
    },
    {
      domain: "sagarjaid.bar",
      extenstion: ".bar",
    },
    {
      domain: "sagarjaid.barcelona",
      extenstion: ".barcelona",
    },
    {
      domain: "sagarjaid.bargains",
      extenstion: ".bargains",
    },
    {
      domain: "sagarjaid.bayern",
      extenstion: ".bayern",
    },
    {
      domain: "sagarjaid.be",
      extenstion: ".be",
    },
    {
      domain: "sagarjaid.beauty",
      extenstion: ".beauty",
    },
    {
      domain: "sagarjaid.beer",
      extenstion: ".beer",
    },
    {
      domain: "sagarjaid.berlin",
      extenstion: ".berlin",
    },
    {
      domain: "sagarjaid.best",
      extenstion: ".best",
    },
    {
      domain: "sagarjaid.bet",
      extenstion: ".bet",
    },
    {
      domain: "sagarjaid.bid",
      extenstion: ".bid",
    },
    {
      domain: "sagarjaid.bike",
      extenstion: ".bike",
    },
    {
      domain: "sagarjaid.bingo",
      extenstion: ".bingo",
    },
    {
      domain: "sagarjaid.bio",
      extenstion: ".bio",
    },
    {
      domain: "sagarjaid.biz",
      extenstion: ".biz",
    },
    {
      domain: "sagarjaid.biz.pl",
      extenstion: ".biz.pl",
    },
    {
      domain: "sagarjaid.black",
      extenstion: ".black",
    },
    {
      domain: "sagarjaid.blog",
      extenstion: ".blog",
    },
    {
      domain: "sagarjaid.blue",
      extenstion: ".blue",
    },
    {
      domain: "sagarjaid.boats",
      extenstion: ".boats",
    },
    {
      domain: "sagarjaid.boston",
      extenstion: ".boston",
    },
    {
      domain: "sagarjaid.boutique",
      extenstion: ".boutique",
    },
    {
      domain: "sagarjaid.build",
      extenstion: ".build",
    },
    {
      domain: "sagarjaid.builders",
      extenstion: ".builders",
    },
    {
      domain: "sagarjaid.business",
      extenstion: ".business",
    },
    {
      domain: "sagarjaid.buzz",
      extenstion: ".buzz",
    },
    {
      domain: "sagarjaid.bz",
      extenstion: ".bz",
    },
    {
      domain: "sagarjaid.ca",
      extenstion: ".ca",
    },
    {
      domain: "sagarjaid.cab",
      extenstion: ".cab",
    },
    {
      domain: "sagarjaid.cafe",
      extenstion: ".cafe",
    },
    {
      domain: "sagarjaid.camera",
      extenstion: ".camera",
    },
    {
      domain: "sagarjaid.camp",
      extenstion: ".camp",
    },
    {
      domain: "sagarjaid.capital",
      extenstion: ".capital",
    },
    {
      domain: "sagarjaid.car",
      extenstion: ".car",
    },
    {
      domain: "sagarjaid.cards",
      extenstion: ".cards",
    },
    {
      domain: "sagarjaid.care",
      extenstion: ".care",
    },
    {
      domain: "sagarjaid.careers",
      extenstion: ".careers",
    },
    {
      domain: "sagarjaid.cars",
      extenstion: ".cars",
    },
    {
      domain: "sagarjaid.casa",
      extenstion: ".casa",
    },
    {
      domain: "sagarjaid.cash",
      extenstion: ".cash",
    },
    {
      domain: "sagarjaid.casino",
      extenstion: ".casino",
    },
    {
      domain: "sagarjaid.catering",
      extenstion: ".catering",
    },
    {
      domain: "sagarjaid.cc",
      extenstion: ".cc",
    },
    {
      domain: "sagarjaid.center",
      extenstion: ".center",
    },
    {
      domain: "sagarjaid.ceo",
      extenstion: ".ceo",
    },
    {
      domain: "sagarjaid.ch",
      extenstion: ".ch",
    },
    {
      domain: "sagarjaid.charity",
      extenstion: ".charity",
    },
    {
      domain: "sagarjaid.chat",
      extenstion: ".chat",
    },
    {
      domain: "sagarjaid.cheap",
      extenstion: ".cheap",
    },
    {
      domain: "sagarjaid.church",
      extenstion: ".church",
    },
    {
      domain: "sagarjaid.city",
      extenstion: ".city",
    },
    {
      domain: "sagarjaid.cl",
      extenstion: ".cl",
    },
    {
      domain: "sagarjaid.claims",
      extenstion: ".claims",
    },
    {
      domain: "sagarjaid.cleaning",
      extenstion: ".cleaning",
    },
    {
      domain: "sagarjaid.clinic",
      extenstion: ".clinic",
    },
    {
      domain: "sagarjaid.clothing",
      extenstion: ".clothing",
    },
    {
      domain: "sagarjaid.cloud",
      extenstion: ".cloud",
    },
    {
      domain: "sagarjaid.club",
      extenstion: ".club",
    },
    {
      domain: "sagarjaid.cn",
      extenstion: ".cn",
    },
    {
      domain: "sagarjaid.co",
      extenstion: ".co",
    },
    {
      domain: "sagarjaid.co.in",
      extenstion: ".co.in",
    },
    {
      domain: "sagarjaid.co.jp",
      extenstion: ".co.jp",
    },
    {
      domain: "sagarjaid.co.kr",
      extenstion: ".co.kr",
    },
    {
      domain: "sagarjaid.co.nz",
      extenstion: ".co.nz",
    },
    {
      domain: "sagarjaid.co.uk",
      extenstion: ".co.uk",
    },
    {
      domain: "sagarjaid.co.za",
      extenstion: ".co.za",
    },
    {
      domain: "sagarjaid.coach",
      extenstion: ".coach",
    },
    {
      domain: "sagarjaid.codes",
      extenstion: ".codes",
    },
    {
      domain: "sagarjaid.coffee",
      extenstion: ".coffee",
    },
    {
      domain: "sagarjaid.college",
      extenstion: ".college",
    },
    {
      domain: "sagarjaid.com",
      extenstion: ".com",
    },
    {
      domain: "sagarjaid.com.ag",
      extenstion: ".com.ag",
    },
    {
      domain: "sagarjaid.com.au",
      extenstion: ".com.au",
    },
    {
      domain: "sagarjaid.com.br",
      extenstion: ".com.br",
    },
    {
      domain: "sagarjaid.com.bz",
      extenstion: ".com.bz",
    },
    {
      domain: "sagarjaid.com.cn",
      extenstion: ".com.cn",
    },
    {
      domain: "sagarjaid.com.co",
      extenstion: ".com.co",
    },
    {
      domain: "sagarjaid.com.es",
      extenstion: ".com.es",
    },
    {
      domain: "sagarjaid.com.ky",
      extenstion: ".com.ky",
    },
    {
      domain: "sagarjaid.com.mx",
      extenstion: ".com.mx",
    },
    {
      domain: "sagarjaid.com.pe",
      extenstion: ".com.pe",
    },
    {
      domain: "sagarjaid.com.ph",
      extenstion: ".com.ph",
    },
    {
      domain: "sagarjaid.com.pl",
      extenstion: ".com.pl",
    },
    {
      domain: "sagarjaid.com.tw",
      extenstion: ".com.tw",
    },
    {
      domain: "sagarjaid.community",
      extenstion: ".community",
    },
    {
      domain: "sagarjaid.company",
      extenstion: ".company",
    },
    {
      domain: "sagarjaid.computer",
      extenstion: ".computer",
    },
    {
      domain: "sagarjaid.condos",
      extenstion: ".condos",
    },
    {
      domain: "sagarjaid.construction",
      extenstion: ".construction",
    },
    {
      domain: "sagarjaid.consulting",
      extenstion: ".consulting",
    },
    {
      domain: "sagarjaid.contact",
      extenstion: ".contact",
    },
    {
      domain: "sagarjaid.contractors",
      extenstion: ".contractors",
    },
    {
      domain: "sagarjaid.cooking",
      extenstion: ".cooking",
    },
    {
      domain: "sagarjaid.cool",
      extenstion: ".cool",
    },
    {
      domain: "sagarjaid.country",
      extenstion: ".country",
    },
    {
      domain: "sagarjaid.coupons",
      extenstion: ".coupons",
    },
    {
      domain: "sagarjaid.courses",
      extenstion: ".courses",
    },
    {
      domain: "sagarjaid.credit",
      extenstion: ".credit",
    },
    {
      domain: "sagarjaid.creditcard",
      extenstion: ".creditcard",
    },
    {
      domain: "sagarjaid.cricket",
      extenstion: ".cricket",
    },
    {
      domain: "sagarjaid.cruises",
      extenstion: ".cruises",
    },
    {
      domain: "sagarjaid.cymru",
      extenstion: ".cymru",
    },
    {
      domain: "sagarjaid.cz",
      extenstion: ".cz",
    },
    {
      domain: "sagarjaid.dance",
      extenstion: ".dance",
    },
    {
      domain: "sagarjaid.date",
      extenstion: ".date",
    },
    {
      domain: "sagarjaid.dating",
      extenstion: ".dating",
    },
    {
      domain: "sagarjaid.de",
      extenstion: ".de",
    },
    {
      domain: "sagarjaid.deals",
      extenstion: ".deals",
    },
    {
      domain: "sagarjaid.degree",
      extenstion: ".degree",
    },
    {
      domain: "sagarjaid.delivery",
      extenstion: ".delivery",
    },
    {
      domain: "sagarjaid.democrat",
      extenstion: ".democrat",
    },
    {
      domain: "sagarjaid.dental",
      extenstion: ".dental",
    },
    {
      domain: "sagarjaid.dentist",
      extenstion: ".dentist",
    },
    {
      domain: "sagarjaid.design",
      extenstion: ".design",
    },
    {
      domain: "sagarjaid.dev",
      extenstion: ".dev",
    },
    {
      domain: "sagarjaid.diamonds",
      extenstion: ".diamonds",
    },
    {
      domain: "sagarjaid.digital",
      extenstion: ".digital",
    },
    {
      domain: "sagarjaid.direct",
      extenstion: ".direct",
    },
    {
      domain: "sagarjaid.directory",
      extenstion: ".directory",
    },
    {
      domain: "sagarjaid.discount",
      extenstion: ".discount",
    },
    {
      domain: "sagarjaid.dk",
      extenstion: ".dk",
    },
    {
      domain: "sagarjaid.doctor",
      extenstion: ".doctor",
    },
    {
      domain: "sagarjaid.dog",
      extenstion: ".dog",
    },
    {
      domain: "sagarjaid.domains",
      extenstion: ".domains",
    },
    {
      domain: "sagarjaid.download",
      extenstion: ".download",
    },
    {
      domain: "sagarjaid.earth",
      extenstion: ".earth",
    },
    {
      domain: "sagarjaid.education",
      extenstion: ".education",
    },
    {
      domain: "sagarjaid.email",
      extenstion: ".email",
    },
    {
      domain: "sagarjaid.energy",
      extenstion: ".energy",
    },
    {
      domain: "sagarjaid.engineer",
      extenstion: ".engineer",
    },
    {
      domain: "sagarjaid.engineering",
      extenstion: ".engineering",
    },
    {
      domain: "sagarjaid.enterprises",
      extenstion: ".enterprises",
    },
    {
      domain: "sagarjaid.equipment",
      extenstion: ".equipment",
    },
    {
      domain: "sagarjaid.es",
      extenstion: ".es",
    },
    {
      domain: "sagarjaid.estate",
      extenstion: ".estate",
    },
    {
      domain: "sagarjaid.eu",
      extenstion: ".eu",
    },
    {
      domain: "sagarjaid.events",
      extenstion: ".events",
    },
    {
      domain: "sagarjaid.exchange",
      extenstion: ".exchange",
    },
    {
      domain: "sagarjaid.expert",
      extenstion: ".expert",
    },
    {
      domain: "sagarjaid.exposed",
      extenstion: ".exposed",
    },
    {
      domain: "sagarjaid.express",
      extenstion: ".express",
    },
    {
      domain: "sagarjaid.fail",
      extenstion: ".fail",
    },
    {
      domain: "sagarjaid.faith",
      extenstion: ".faith",
    },
    {
      domain: "sagarjaid.family",
      extenstion: ".family",
    },
    {
      domain: "sagarjaid.fan",
      extenstion: ".fan",
    },
    {
      domain: "sagarjaid.fans",
      extenstion: ".fans",
    },
    {
      domain: "sagarjaid.farm",
      extenstion: ".farm",
    },
    {
      domain: "sagarjaid.fashion",
      extenstion: ".fashion",
    },
    {
      domain: "sagarjaid.film",
      extenstion: ".film",
    },
    {
      domain: "sagarjaid.finance",
      extenstion: ".finance",
    },
    {
      domain: "sagarjaid.financial",
      extenstion: ".financial",
    },
    {
      domain: "sagarjaid.firm.in",
      extenstion: ".firm.in",
    },
    {
      domain: "sagarjaid.fish",
      extenstion: ".fish",
    },
    {
      domain: "sagarjaid.fishing",
      extenstion: ".fishing",
    },
    {
      domain: "sagarjaid.fit",
      extenstion: ".fit",
    },
    {
      domain: "sagarjaid.fitness",
      extenstion: ".fitness",
    },
    {
      domain: "sagarjaid.flights",
      extenstion: ".flights",
    },
    {
      domain: "sagarjaid.florist",
      extenstion: ".florist",
    },
    {
      domain: "sagarjaid.fm",
      extenstion: ".fm",
    },
    {
      domain: "sagarjaid.football",
      extenstion: ".football",
    },
    {
      domain: "sagarjaid.forsale",
      extenstion: ".forsale",
    },
    {
      domain: "sagarjaid.foundation",
      extenstion: ".foundation",
    },
    {
      domain: "sagarjaid.fr",
      extenstion: ".fr",
    },
    {
      domain: "sagarjaid.fun",
      extenstion: ".fun",
    },
    {
      domain: "sagarjaid.fund",
      extenstion: ".fund",
    },
    {
      domain: "sagarjaid.furniture",
      extenstion: ".furniture",
    },
    {
      domain: "sagarjaid.futbol",
      extenstion: ".futbol",
    },
    {
      domain: "sagarjaid.fyi",
      extenstion: ".fyi",
    },
    {
      domain: "sagarjaid.gallery",
      extenstion: ".gallery",
    },
    {
      domain: "sagarjaid.games",
      extenstion: ".games",
    },
    {
      domain: "sagarjaid.garden",
      extenstion: ".garden",
    },
    {
      domain: "sagarjaid.gay",
      extenstion: ".gay",
    },
    {
      domain: "sagarjaid.gen.in",
      extenstion: ".gen.in",
    },
    {
      domain: "sagarjaid.gg",
      extenstion: ".gg",
    },
    {
      domain: "sagarjaid.gifts",
      extenstion: ".gifts",
    },
    {
      domain: "sagarjaid.gives",
      extenstion: ".gives",
    },
    {
      domain: "sagarjaid.giving",
      extenstion: ".giving",
    },
    {
      domain: "sagarjaid.glass",
      extenstion: ".glass",
    },
    {
      domain: "sagarjaid.global",
      extenstion: ".global",
    },
    {
      domain: "sagarjaid.gmbh",
      extenstion: ".gmbh",
    },
    {
      domain: "sagarjaid.gold",
      extenstion: ".gold",
    },
    {
      domain: "sagarjaid.golf",
      extenstion: ".golf",
    },
    {
      domain: "sagarjaid.graphics",
      extenstion: ".graphics",
    },
    {
      domain: "sagarjaid.gratis",
      extenstion: ".gratis",
    },
    {
      domain: "sagarjaid.green",
      extenstion: ".green",
    },
    {
      domain: "sagarjaid.gripe",
      extenstion: ".gripe",
    },
    {
      domain: "sagarjaid.group",
      extenstion: ".group",
    },
    {
      domain: "sagarjaid.gs",
      extenstion: ".gs",
    },
    {
      domain: "sagarjaid.guide",
      extenstion: ".guide",
    },
    {
      domain: "sagarjaid.guru",
      extenstion: ".guru",
    },
    {
      domain: "sagarjaid.hair",
      extenstion: ".hair",
    },
    {
      domain: "sagarjaid.haus",
      extenstion: ".haus",
    },
    {
      domain: "sagarjaid.health",
      extenstion: ".health",
    },
    {
      domain: "sagarjaid.healthcare",
      extenstion: ".healthcare",
    },
    {
      domain: "sagarjaid.hockey",
      extenstion: ".hockey",
    },
    {
      domain: "sagarjaid.holdings",
      extenstion: ".holdings",
    },
    {
      domain: "sagarjaid.holiday",
      extenstion: ".holiday",
    },
    {
      domain: "sagarjaid.homes",
      extenstion: ".homes",
    },
    {
      domain: "sagarjaid.horse",
      extenstion: ".horse",
    },
    {
      domain: "sagarjaid.hospital",
      extenstion: ".hospital",
    },
    {
      domain: "sagarjaid.host",
      extenstion: ".host",
    },
    {
      domain: "sagarjaid.house",
      extenstion: ".house",
    },
    {
      domain: "sagarjaid.idv.tw",
      extenstion: ".idv.tw",
    },
    {
      domain: "sagarjaid.immo",
      extenstion: ".immo",
    },
    {
      domain: "sagarjaid.immobilien",
      extenstion: ".immobilien",
    },
    {
      domain: "sagarjaid.in",
      extenstion: ".in",
    },
    {
      domain: "sagarjaid.inc",
      extenstion: ".inc",
    },
    {
      domain: "sagarjaid.ind.in",
      extenstion: ".ind.in",
    },
    {
      domain: "sagarjaid.industries",
      extenstion: ".industries",
    },
    {
      domain: "sagarjaid.info",
      extenstion: ".info",
    },
    {
      domain: "sagarjaid.info.pl",
      extenstion: ".info.pl",
    },
    {
      domain: "sagarjaid.ink",
      extenstion: ".ink",
    },
    {
      domain: "sagarjaid.institute",
      extenstion: ".institute",
    },
    {
      domain: "sagarjaid.insure",
      extenstion: ".insure",
    },
    {
      domain: "sagarjaid.international",
      extenstion: ".international",
    },
    {
      domain: "sagarjaid.investments",
      extenstion: ".investments",
    },
    {
      domain: "sagarjaid.io",
      extenstion: ".io",
    },
    {
      domain: "sagarjaid.irish",
      extenstion: ".irish",
    },
    {
      domain: "sagarjaid.ist",
      extenstion: ".ist",
    },
    {
      domain: "sagarjaid.istanbul",
      extenstion: ".istanbul",
    },
    {
      domain: "sagarjaid.it",
      extenstion: ".it",
    },
    {
      domain: "sagarjaid.jetzt",
      extenstion: ".jetzt",
    },
    {
      domain: "sagarjaid.jewelry",
      extenstion: ".jewelry",
    },
    {
      domain: "sagarjaid.jobs",
      extenstion: ".jobs",
    },
    {
      domain: "sagarjaid.jp",
      extenstion: ".jp",
    },
    {
      domain: "sagarjaid.kaufen",
      extenstion: ".kaufen",
    },
    {
      domain: "sagarjaid.kids",
      extenstion: ".kids",
    },
    {
      domain: "sagarjaid.kim",
      extenstion: ".kim",
    },
    {
      domain: "sagarjaid.kitchen",
      extenstion: ".kitchen",
    },
    {
      domain: "sagarjaid.kiwi",
      extenstion: ".kiwi",
    },
    {
      domain: "sagarjaid.kr",
      extenstion: ".kr",
    },
    {
      domain: "sagarjaid.ky",
      extenstion: ".ky",
    },
    {
      domain: "sagarjaid.la",
      extenstion: ".la",
    },
    {
      domain: "sagarjaid.land",
      extenstion: ".land",
    },
    {
      domain: "sagarjaid.lat",
      extenstion: ".lat",
    },
    {
      domain: "sagarjaid.law",
      extenstion: ".law",
    },
    {
      domain: "sagarjaid.lawyer",
      extenstion: ".lawyer",
    },
    {
      domain: "sagarjaid.lease",
      extenstion: ".lease",
    },
    {
      domain: "sagarjaid.legal",
      extenstion: ".legal",
    },
    {
      domain: "sagarjaid.lgbt",
      extenstion: ".lgbt",
    },
    {
      domain: "sagarjaid.life",
      extenstion: ".life",
    },
    {
      domain: "sagarjaid.lighting",
      extenstion: ".lighting",
    },
    {
      domain: "sagarjaid.limited",
      extenstion: ".limited",
    },
    {
      domain: "sagarjaid.limo",
      extenstion: ".limo",
    },
    {
      domain: "sagarjaid.live",
      extenstion: ".live",
    },
    {
      domain: "sagarjaid.llc",
      extenstion: ".llc",
    },
    {
      domain: "sagarjaid.loan",
      extenstion: ".loan",
    },
    {
      domain: "sagarjaid.loans",
      extenstion: ".loans",
    },
    {
      domain: "sagarjaid.london",
      extenstion: ".london",
    },
    {
      domain: "sagarjaid.love",
      extenstion: ".love",
    },
    {
      domain: "sagarjaid.ltd",
      extenstion: ".ltd",
    },
    {
      domain: "sagarjaid.ltda",
      extenstion: ".ltda",
    },
    {
      domain: "sagarjaid.luxury",
      extenstion: ".luxury",
    },
    {
      domain: "sagarjaid.maison",
      extenstion: ".maison",
    },
    {
      domain: "sagarjaid.makeup",
      extenstion: ".makeup",
    },
    {
      domain: "sagarjaid.management",
      extenstion: ".management",
    },
    {
      domain: "sagarjaid.market",
      extenstion: ".market",
    },
    {
      domain: "sagarjaid.marketing",
      extenstion: ".marketing",
    },
    {
      domain: "sagarjaid.mba",
      extenstion: ".mba",
    },
    {
      domain: "sagarjaid.me",
      extenstion: ".me",
    },
    {
      domain: "sagarjaid.me.uk",
      extenstion: ".me.uk",
    },
    {
      domain: "sagarjaid.media",
      extenstion: ".media",
    },
    {
      domain: "sagarjaid.melbourne",
      extenstion: ".melbourne",
    },
    {
      domain: "sagarjaid.memorial",
      extenstion: ".memorial",
    },
    {
      domain: "sagarjaid.men",
      extenstion: ".men",
    },
    {
      domain: "sagarjaid.menu",
      extenstion: ".menu",
    },
    {
      domain: "sagarjaid.miami",
      extenstion: ".miami",
    },
    {
      domain: "sagarjaid.mobi",
      extenstion: ".mobi",
    },
    {
      domain: "sagarjaid.moda",
      extenstion: ".moda",
    },
    {
      domain: "sagarjaid.moe",
      extenstion: ".moe",
    },
    {
      domain: "sagarjaid.money",
      extenstion: ".money",
    },
    {
      domain: "sagarjaid.monster",
      extenstion: ".monster",
    },
    {
      domain: "sagarjaid.mortgage",
      extenstion: ".mortgage",
    },
    {
      domain: "sagarjaid.motorcycles",
      extenstion: ".motorcycles",
    },
    {
      domain: "sagarjaid.movie",
      extenstion: ".movie",
    },
    {
      domain: "sagarjaid.ms",
      extenstion: ".ms",
    },
    {
      domain: "sagarjaid.mx",
      extenstion: ".mx",
    },
    {
      domain: "sagarjaid.nagoya",
      extenstion: ".nagoya",
    },
    {
      domain: "sagarjaid.name",
      extenstion: ".name",
    },
    {
      domain: "sagarjaid.navy",
      extenstion: ".navy",
    },
    {
      domain: "sagarjaid.ne.kr",
      extenstion: ".ne.kr",
    },
    {
      domain: "sagarjaid.net",
      extenstion: ".net",
    },
    {
      domain: "sagarjaid.net.ag",
      extenstion: ".net.ag",
    },
    {
      domain: "sagarjaid.net.au",
      extenstion: ".net.au",
    },
    {
      domain: "sagarjaid.net.br",
      extenstion: ".net.br",
    },
    {
      domain: "sagarjaid.net.bz",
      extenstion: ".net.bz",
    },
    {
      domain: "sagarjaid.net.cn",
      extenstion: ".net.cn",
    },
    {
      domain: "sagarjaid.net.co",
      extenstion: ".net.co",
    },
    {
      domain: "sagarjaid.net.in",
      extenstion: ".net.in",
    },
    {
      domain: "sagarjaid.net.ky",
      extenstion: ".net.ky",
    },
    {
      domain: "sagarjaid.net.nz",
      extenstion: ".net.nz",
    },
    {
      domain: "sagarjaid.net.pe",
      extenstion: ".net.pe",
    },
    {
      domain: "sagarjaid.net.ph",
      extenstion: ".net.ph",
    },
    {
      domain: "sagarjaid.net.pl",
      extenstion: ".net.pl",
    },
    {
      domain: "sagarjaid.network",
      extenstion: ".network",
    },
    {
      domain: "sagarjaid.news",
      extenstion: ".news",
    },
    {
      domain: "sagarjaid.ninja",
      extenstion: ".ninja",
    },
    {
      domain: "sagarjaid.nl",
      extenstion: ".nl",
    },
    {
      domain: "sagarjaid.no",
      extenstion: ".no",
    },
    {
      domain: "sagarjaid.nom.co",
      extenstion: ".nom.co",
    },
    {
      domain: "sagarjaid.nom.es",
      extenstion: ".nom.es",
    },
    {
      domain: "sagarjaid.nom.pe",
      extenstion: ".nom.pe",
    },
    {
      domain: "sagarjaid.nrw",
      extenstion: ".nrw",
    },
    {
      domain: "sagarjaid.nyc",
      extenstion: ".nyc",
    },
    {
      domain: "sagarjaid.okinawa",
      extenstion: ".okinawa",
    },
    {
      domain: "sagarjaid.one",
      extenstion: ".one",
    },
    {
      domain: "sagarjaid.onl",
      extenstion: ".onl",
    },
    {
      domain: "sagarjaid.online",
      extenstion: ".online",
    },
    {
      domain: "sagarjaid.org",
      extenstion: ".org",
    },
    {
      domain: "sagarjaid.org.ag",
      extenstion: ".org.ag",
    },
    {
      domain: "sagarjaid.org.au",
      extenstion: ".org.au",
    },
    {
      domain: "sagarjaid.org.cn",
      extenstion: ".org.cn",
    },
    {
      domain: "sagarjaid.org.es",
      extenstion: ".org.es",
    },
    {
      domain: "sagarjaid.org.in",
      extenstion: ".org.in",
    },
    {
      domain: "sagarjaid.org.ky",
      extenstion: ".org.ky",
    },
    {
      domain: "sagarjaid.org.nz",
      extenstion: ".org.nz",
    },
    {
      domain: "sagarjaid.org.pe",
      extenstion: ".org.pe",
    },
    {
      domain: "sagarjaid.org.ph",
      extenstion: ".org.ph",
    },
    {
      domain: "sagarjaid.org.pl",
      extenstion: ".org.pl",
    },
    {
      domain: "sagarjaid.org.uk",
      extenstion: ".org.uk",
    },
    {
      domain: "sagarjaid.page",
      extenstion: ".page",
    },
    {
      domain: "sagarjaid.paris",
      extenstion: ".paris",
    },
    {
      domain: "sagarjaid.partners",
      extenstion: ".partners",
    },
    {
      domain: "sagarjaid.parts",
      extenstion: ".parts",
    },
    {
      domain: "sagarjaid.party",
      extenstion: ".party",
    },
    {
      domain: "sagarjaid.pe",
      extenstion: ".pe",
    },
    {
      domain: "sagarjaid.pet",
      extenstion: ".pet",
    },
    {
      domain: "sagarjaid.ph",
      extenstion: ".ph",
    },
    {
      domain: "sagarjaid.photography",
      extenstion: ".photography",
    },
    {
      domain: "sagarjaid.photos",
      extenstion: ".photos",
    },
    {
      domain: "sagarjaid.pictures",
      extenstion: ".pictures",
    },
    {
      domain: "sagarjaid.pink",
      extenstion: ".pink",
    },
    {
      domain: "sagarjaid.pizza",
      extenstion: ".pizza",
    },
    {
      domain: "sagarjaid.pl",
      extenstion: ".pl",
    },
    {
      domain: "sagarjaid.place",
      extenstion: ".place",
    },
    {
      domain: "sagarjaid.plumbing",
      extenstion: ".plumbing",
    },
    {
      domain: "sagarjaid.plus",
      extenstion: ".plus",
    },
    {
      domain: "sagarjaid.poker",
      extenstion: ".poker",
    },
    {
      domain: "sagarjaid.porn",
      extenstion: ".porn",
    },
    {
      domain: "sagarjaid.press",
      extenstion: ".press",
    },
    {
      domain: "sagarjaid.pro",
      extenstion: ".pro",
    },
    {
      domain: "sagarjaid.productions",
      extenstion: ".productions",
    },
    {
      domain: "sagarjaid.promo",
      extenstion: ".promo",
    },
    {
      domain: "sagarjaid.properties",
      extenstion: ".properties",
    },
    {
      domain: "sagarjaid.protection",
      extenstion: ".protection",
    },
    {
      domain: "sagarjaid.pub",
      extenstion: ".pub",
    },
    {
      domain: "sagarjaid.pw",
      extenstion: ".pw",
    },
    {
      domain: "sagarjaid.quebec",
      extenstion: ".quebec",
    },
    {
      domain: "sagarjaid.quest",
      extenstion: ".quest",
    },
    {
      domain: "sagarjaid.racing",
      extenstion: ".racing",
    },
    {
      domain: "sagarjaid.re.kr",
      extenstion: ".re.kr",
    },
    {
      domain: "sagarjaid.realestate",
      extenstion: ".realestate",
    },
    {
      domain: "sagarjaid.recipes",
      extenstion: ".recipes",
    },
    {
      domain: "sagarjaid.red",
      extenstion: ".red",
    },
    {
      domain: "sagarjaid.rehab",
      extenstion: ".rehab",
    },
    {
      domain: "sagarjaid.reise",
      extenstion: ".reise",
    },
    {
      domain: "sagarjaid.reisen",
      extenstion: ".reisen",
    },
    {
      domain: "sagarjaid.rent",
      extenstion: ".rent",
    },
    {
      domain: "sagarjaid.rentals",
      extenstion: ".rentals",
    },
    {
      domain: "sagarjaid.repair",
      extenstion: ".repair",
    },
    {
      domain: "sagarjaid.report",
      extenstion: ".report",
    },
    {
      domain: "sagarjaid.republican",
      extenstion: ".republican",
    },
    {
      domain: "sagarjaid.rest",
      extenstion: ".rest",
    },
    {
      domain: "sagarjaid.restaurant",
      extenstion: ".restaurant",
    },
    {
      domain: "sagarjaid.review",
      extenstion: ".review",
    },
    {
      domain: "sagarjaid.reviews",
      extenstion: ".reviews",
    },
    {
      domain: "sagarjaid.rich",
      extenstion: ".rich",
    },
    {
      domain: "sagarjaid.rip",
      extenstion: ".rip",
    },
    {
      domain: "sagarjaid.rocks",
      extenstion: ".rocks",
    },
    {
      domain: "sagarjaid.rodeo",
      extenstion: ".rodeo",
    },
    {
      domain: "sagarjaid.run",
      extenstion: ".run",
    },
    {
      domain: "sagarjaid.ryukyu",
      extenstion: ".ryukyu",
    },
    {
      domain: "sagarjaid.sale",
      extenstion: ".sale",
    },
    {
      domain: "sagarjaid.salon",
      extenstion: ".salon",
    },
    {
      domain: "sagarjaid.sarl",
      extenstion: ".sarl",
    },
    {
      domain: "sagarjaid.school",
      extenstion: ".school",
    },
    {
      domain: "sagarjaid.schule",
      extenstion: ".schule",
    },
    {
      domain: "sagarjaid.science",
      extenstion: ".science",
    },
    {
      domain: "sagarjaid.se",
      extenstion: ".se",
    },
    {
      domain: "sagarjaid.security",
      extenstion: ".security",
    },
    {
      domain: "sagarjaid.services",
      extenstion: ".services",
    },
    {
      domain: "sagarjaid.sex",
      extenstion: ".sex",
    },
    {
      domain: "sagarjaid.sg",
      extenstion: ".sg",
    },
    {
      domain: "sagarjaid.sh",
      extenstion: ".sh",
    },
    {
      domain: "sagarjaid.shiksha",
      extenstion: ".shiksha",
    },
    {
      domain: "sagarjaid.shoes",
      extenstion: ".shoes",
    },
    {
      domain: "sagarjaid.shop",
      extenstion: ".shop",
    },
    {
      domain: "sagarjaid.shopping",
      extenstion: ".shopping",
    },
    {
      domain: "sagarjaid.show",
      extenstion: ".show",
    },
    {
      domain: "sagarjaid.singles",
      extenstion: ".singles",
    },
    {
      domain: "sagarjaid.site",
      extenstion: ".site",
    },
    {
      domain: "sagarjaid.ski",
      extenstion: ".ski",
    },
    {
      domain: "sagarjaid.skin",
      extenstion: ".skin",
    },
    {
      domain: "sagarjaid.soccer",
      extenstion: ".soccer",
    },
    {
      domain: "sagarjaid.social",
      extenstion: ".social",
    },
    {
      domain: "sagarjaid.software",
      extenstion: ".software",
    },
    {
      domain: "sagarjaid.solar",
      extenstion: ".solar",
    },
    {
      domain: "sagarjaid.solutions",
      extenstion: ".solutions",
    },
    {
      domain: "sagarjaid.space",
      extenstion: ".space",
    },
    {
      domain: "sagarjaid.storage",
      extenstion: ".storage",
    },
    {
      domain: "sagarjaid.store",
      extenstion: ".store",
    },
    {
      domain: "sagarjaid.stream",
      extenstion: ".stream",
    },
    {
      domain: "sagarjaid.studio",
      extenstion: ".studio",
    },
    {
      domain: "sagarjaid.study",
      extenstion: ".study",
    },
    {
      domain: "sagarjaid.style",
      extenstion: ".style",
    },
    {
      domain: "sagarjaid.supplies",
      extenstion: ".supplies",
    },
    {
      domain: "sagarjaid.supply",
      extenstion: ".supply",
    },
    {
      domain: "sagarjaid.support",
      extenstion: ".support",
    },
    {
      domain: "sagarjaid.surf",
      extenstion: ".surf",
    },
    {
      domain: "sagarjaid.surgery",
      extenstion: ".surgery",
    },
    {
      domain: "sagarjaid.sydney",
      extenstion: ".sydney",
    },
    {
      domain: "sagarjaid.systems",
      extenstion: ".systems",
    },
    {
      domain: "sagarjaid.tax",
      extenstion: ".tax",
    },
    {
      domain: "sagarjaid.taxi",
      extenstion: ".taxi",
    },
    {
      domain: "sagarjaid.team",
      extenstion: ".team",
    },
    {
      domain: "sagarjaid.tech",
      extenstion: ".tech",
    },
    {
      domain: "sagarjaid.technology",
      extenstion: ".technology",
    },
    {
      domain: "sagarjaid.tel",
      extenstion: ".tel",
    },
    {
      domain: "sagarjaid.tennis",
      extenstion: ".tennis",
    },
    {
      domain: "sagarjaid.theater",
      extenstion: ".theater",
    },
    {
      domain: "sagarjaid.theatre",
      extenstion: ".theatre",
    },
    {
      domain: "sagarjaid.tickets",
      extenstion: ".tickets",
    },
    {
      domain: "sagarjaid.tienda",
      extenstion: ".tienda",
    },
    {
      domain: "sagarjaid.tips",
      extenstion: ".tips",
    },
    {
      domain: "sagarjaid.tires",
      extenstion: ".tires",
    },
    {
      domain: "sagarjaid.today",
      extenstion: ".today",
    },
    {
      domain: "sagarjaid.tokyo",
      extenstion: ".tokyo",
    },
    {
      domain: "sagarjaid.tools",
      extenstion: ".tools",
    },
    {
      domain: "sagarjaid.tours",
      extenstion: ".tours",
    },
    {
      domain: "sagarjaid.town",
      extenstion: ".town",
    },
    {
      domain: "sagarjaid.toys",
      extenstion: ".toys",
    },
    {
      domain: "sagarjaid.trade",
      extenstion: ".trade",
    },
    {
      domain: "sagarjaid.training",
      extenstion: ".training",
    },
    {
      domain: "sagarjaid.travel",
      extenstion: ".travel",
    },
    {
      domain: "sagarjaid.tube",
      extenstion: ".tube",
    },
    {
      domain: "sagarjaid.tv",
      extenstion: ".tv",
    },
    {
      domain: "sagarjaid.tw",
      extenstion: ".tw",
    },
    {
      domain: "sagarjaid.uk",
      extenstion: ".uk",
    },
    {
      domain: "sagarjaid.university",
      extenstion: ".university",
    },
    {
      domain: "sagarjaid.uno",
      extenstion: ".uno",
    },
    {
      domain: "sagarjaid.us",
      extenstion: ".us",
    },
    {
      domain: "sagarjaid.vacations",
      extenstion: ".vacations",
    },
    {
      domain: "sagarjaid.vc",
      extenstion: ".vc",
    },
    {
      domain: "sagarjaid.vegas",
      extenstion: ".vegas",
    },
    {
      domain: "sagarjaid.ventures",
      extenstion: ".ventures",
    },
    {
      domain: "sagarjaid.vet",
      extenstion: ".vet",
    },
    {
      domain: "sagarjaid.viajes",
      extenstion: ".viajes",
    },
    {
      domain: "sagarjaid.video",
      extenstion: ".video",
    },
    {
      domain: "sagarjaid.villas",
      extenstion: ".villas",
    },
    {
      domain: "sagarjaid.vin",
      extenstion: ".vin",
    },
    {
      domain: "sagarjaid.vip",
      extenstion: ".vip",
    },
    {
      domain: "sagarjaid.vision",
      extenstion: ".vision",
    },
    {
      domain: "sagarjaid.vodka",
      extenstion: ".vodka",
    },
    {
      domain: "sagarjaid.vote",
      extenstion: ".vote",
    },
    {
      domain: "sagarjaid.voto",
      extenstion: ".voto",
    },
    {
      domain: "sagarjaid.voyage",
      extenstion: ".voyage",
    },
    {
      domain: "sagarjaid.wales",
      extenstion: ".wales",
    },
    {
      domain: "sagarjaid.watch",
      extenstion: ".watch",
    },
    {
      domain: "sagarjaid.webcam",
      extenstion: ".webcam",
    },
    {
      domain: "sagarjaid.website",
      extenstion: ".website",
    },
    {
      domain: "sagarjaid.wedding",
      extenstion: ".wedding",
    },
    {
      domain: "sagarjaid.wiki",
      extenstion: ".wiki",
    },
    {
      domain: "sagarjaid.win",
      extenstion: ".win",
    },
    {
      domain: "sagarjaid.wine",
      extenstion: ".wine",
    },
    {
      domain: "sagarjaid.work",
      extenstion: ".work",
    },
    {
      domain: "sagarjaid.works",
      extenstion: ".works",
    },
    {
      domain: "sagarjaid.world",
      extenstion: ".world",
    },
    {
      domain: "sagarjaid.ws",
      extenstion: ".ws",
    },
    {
      domain: "sagarjaid.wtf",
      extenstion: ".wtf",
    },
    {
      domain: "sagarjaid.xxx",
      extenstion: ".xxx",
    },
    {
      domain: "sagarjaid.xyz",
      extenstion: ".xyz",
    },
    {
      domain: "sagarjaid.yachts",
      extenstion: ".yachts",
    },
    {
      domain: "sagarjaid.yoga",
      extenstion: ".yoga",
    },
    {
      domain: "sagarjaid.yokohama",
      extenstion: ".yokohama",
    },
    {
      domain: "sagarjaid.zone",
      extenstion: ".zone",
    },
    {
      domain: "sagarjaid.移动",
      extenstion: ".移动",
    },
  ];

  return (
    <>
      <Head>
        <title>Scrip AI — AI TikTok, Reel & YT Shorts Script Writer</title>
        <meta
          name="title"
          content="Scrip AI — AI TikTok, Reel & YT Shorts Script Writer"
        />
        <meta
          name="description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scripai.com/" />
        <meta
          property="og:title"
          content="Scrip AI — AI TikTok, Reel & YT Shorts Script Writer"
        />
        <meta
          property="og:description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />
        <meta
          property="og:image"
          content="https://scripai.com/scrip-ai-cover.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://scripai.com/" />
        <meta
          property="twitter:title"
          content="Scrip AI — AI TikTok, Reel & YT Shorts Script Writer"
        />
        <meta
          property="twitter:description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />
        <meta
          property="twitter:image"
          content="https://scripai.com/scrip-ai-cover.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="https://scripai.com/favicon.png" />

        <meta
          name="google-site-verification"
          content="Yp9e-xgEgjFSdaOwKgO0bv66QN5ScCpFxlGr0F8qUWk"
        />
      </Head>
      <main className="m-auto flex max-w-5xl flex-col px-4">
        {/* <div className=" p-2 w-full text-center bg-yellow-400">NOTE: Due to overwhelming response we are out of capacity right now 🔥🔥🔥 please check us after 4 hours</div> */}
        <nav className="flex flex-col w-full gap-3  sm:flex-row  justify-between sm:items-center py-4">
          <a href="/">
            <span className="font-medium smd:text-xl py-2 px-4 text-white bg-black cursor-pointer rounded-full rounded-tl-sm ">
              WHOIS_IP
            </span>
          </a>
          <form className="text-gray-600 w-full grow rounded-md border-2 sm:border-2 border-black  flex justify-around items-center px-1 pr-0">
            <input
              type="text"
              name="url"
              title="Please enter correct tiktok url"
              placeholder="type domain name or paste url..."
              className="w-full pl-4 rounded-l-full text-sm font-light focus:outline-none text-black placeholder:text-slate-600 placeholder:font-light"
              value={value}
              onChange={handleInput}
              autoComplete="off"
            />
            <span calssName="flex items-center">
              <button
                disabled={true}
                type="submit"
                className="cursor-pointer px-4 bg-black w-min flex justify-center h-8 m:h-10 items-center  text-white"
              >
                <span calssName="mr-1">Search</span>
              </button>
            </span>
          </form>
        </nav>
        <div className="flex flex-col gap-6 p-2 py-5 ">
          <div className="flex gap-2 flex-wrap items-center">
            <div className="flex flex-col justify-start gap-3">
              <div className="font-bold">
                Sagar Jaid — founder at CAREERDEKHO!
              </div>
              <div className="text-xs">sagarjaid.com</div>
              <div className="text-sm">
                Sagar Jaid, Official Website. Programmer. Entrepreneur, Tech and
                Startups Geek.
              </div>
              <div className="text-xs">
                Keywords: online doctor, best article spinner, book doctors
                online, best article spinner 2020, youtube video to article
                converter
              </div>
            </div>

            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1674748864027x758037379356346600%2FVoicePen.png?w=&h=&auto=compress&dpr=1&fit=max"
              className="w-[300px] h-[250px] object-cover"
            />

            <div>
              <div className="w-[300px] h-[250px] bg-white"></div>
            </div>
            <div>
              <div className="w-[300px] h-[250px] bg-white"></div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-base underline">About sagarjaid.com</div>
            <div className="text-sm">
              Google.com is one of the most popular websites in the world and is
              used by millions of people every day. The domain name for the
              website is "google.com" and it was created on September 15, 1997.
              The website is owned by Google LLC, which is based in California,
              United States. The domain is registered with MarkMonitor, Inc. and
              has a Domain ID of 2138514_DOMAIN_COM-VRSN. The website's domain
              name is set to expire on September 13, 2028. The website's Name
              Servers are ns1.google.com and ns2.google.com, which help direct
              traffic to the website. The information on the website's domain
              name, registration, and ownership can be found through publicly
              available records.
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            {/* <div>
              <div className="w-[300px] h-[600px] bg-black"></div>
            </div> */}
            <div className=" flex flex-col text-sm gap-3 grow">
              <div className="text-base border-black   border-b-2">
                SSL certificate
              </div>
              <div className="border-b border-black">
                Domain Name: 'Sagarjaid.com'
              </div>
              <div className="border-b border-black"> Issuer Country: US</div>
              <div className="border-b border-black">
                Issuer Organization: Let's Encrypt
              </div>
              <div className="border-b border-black">Issuer: R3</div>
              <div className="border-b border-black">SSL Version: 2</div>
              <div className="border-b border-black">
                Signature Algorithm: RSA-SHA256
              </div>
              <div className="border-b border-black">Issued on: 2023-03-12</div>
              <div className="border-b border-black">
                Expires on: 2023-06-10
              </div>
              <div className="border-b border-black">
                Public Key Algorithm: sha256WithRSAEncryption
              </div>
            </div>
            <div className=" flex flex-col text-sm gap-3 grow">
              <div className="text-base border-black   border-b-2">
                Server location
              </div>
              <div className="border-b border-black">country_code: 'US'</div>
              <div className="border-b border-black"> region_code: NJ</div>
              <div className="border-b border-black">
                region_name: New Jersey
              </div>
              <div className="border-b border-black">city: Colts Neck</div>
              <div className="border-b border-black">isp: Google LLC</div>
              <div className="border-b border-black">zip_code: 07722</div>
              <div className="border-b border-black">latitude: 40.3029</div>
              <div className="border-b border-black">longitude: -74.1828</div>
              <div className="border-b border-black">
                time_zone: America/New_York
              </div>
            </div>
            <div className=" flex flex-col text-sm gap-3 grow">
              <div className="text-base border-black   border-b-2">
                Name Server
              </div>
              <div className="border-b border-black">
                Name Server: ns3.google.com
              </div>
              <div className="border-b border-black">
                Name Server: ns1.google.com
              </div>
              <div className="border-b border-black">
                Name Server: ns2.google.com
              </div>
              <div className="border-b border-black">
                Name Server: ns4.google.com
              </div>
            </div>
            {/* <div className=" flex flex-col text-sm gap-2 grow">
              <div className="text-base underline">Server location</div>
              <div>country_code: 'US'</div>
              <div>country_name: 'United States'</div>
              <div>region_code: NJ</div>
              <div>region_name: New Jersey</div>
              <div>city: Colts Neck</div>
              <div>isp: Google LLC</div>
              <div>zip_code: 07722</div>
              <div>latitude: 40.3029</div>
              <div>longitude: -74.1828</div>
              <div>time_zone: America/New_York</div>
            </div> */}
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-base border-black border-b-2">
              Whois lookup sagarjaid.com
            </div>
            <div className="flex flex-col gap-3 border p-2">
              <div className="text-sm">Domain Name: google.com</div>
              <div className="text-sm">
                Updated Date: 2019-09-09T15:39:04+0000
              </div>
              <div className="text-sm">
                Creation Date: 1997-09-15T07:00:00+0000
              </div>
              <div className="text-sm">
                Expiration Date: 2028-09-13T07:00:00+0000
              </div>
              <div className="text-sm">Domain ID: 2138514_DOMAIN_COM-VRSN</div>

              <div className="text-sm">Domain Registrar: MarkMonitor, Inc.</div>
              <div className="text-sm">Domain Registrar IANA ID: 292</div>
              <div className="text-sm">
                Domain Registrar WHOIS Server: whois.markmonitor.com
              </div>
              <div className="text-sm">
                Domain Registrar URL: http://www.markmonitor.com
              </div>
              <div className="text-sm">
                Domain Registrar Abuse Contact Email:
                abusecomplaints@markmonitor.com
              </div>
              <div className="text-sm">
                Domain Registrar Abuse Contact Phone: +1.2086851750
              </div>
              <div className="text-sm">
                Domain Status: clientUpdateProhibited
                <div className="text-xs">
                  https://www.icann.org/epp#clientUpdateProhibited
                </div>
              </div>
              <div className="text-sm">
                Domain Status: clientTransferProhibited
                <div className="text-xs">
                  https://www.icann.org/epp#clientTransferProhibited
                </div>
              </div>
              <div className="text-sm">
                Domain Status: clientDeleteProhibited
                <div className="text-xs">
                  https://www.icann.org/epp#clientDeleteProhibited
                </div>
              </div>
              <div className="text-sm">
                Domain Status: serverUpdateProhibited
                <div className="text-xs">
                  https://www.icann.org/epp#serverUpdateProhibited
                </div>
              </div>
              <div className="text-sm">
                Domain Status: serverTransferProhibited
                <div className="text-xs">
                  https://www.icann.org/epp#serverTransferProhibited
                </div>
              </div>
              <div className="text-sm">
                Domain Status: serverDeleteProhibited
                <div className="text-xs">
                  https://www.icann.org/epp#serverDeleteProhibited
                </div>
              </div>

              <div className="text-sm">Owener Organization: Google LLC</div>
              <div className="text-sm">Owener State/Province: CA</div>
              <div className="text-sm">Owener Country: US</div>
              <div className="text-sm">
                Owener Email: Select Request Email Form at
                <div className="text-xs">
                  https://domains.markmonitor.com/whois/google.com
                </div>
              </div>
              <div className="text-sm">
                Website Admin Organization: Google LLC
              </div>
              <div className="text-sm">Website Admin State/Province: CA</div>
              <div className="text-sm">Website Admin Country: US</div>
              <div className="text-sm">
                Website Admin Email: Select Request Email Form at
                <div className="text-xs">
                  https://domains.markmonitor.com/whois/google.com
                </div>
              </div>
              {/* <div className="text-sm">Domain</div>
            <div className="text-sm">Domain</div>
            <div className="text-sm">Domain</div>
            <div className="text-sm">Domain</div>
            <div className="text-sm">Domain</div>
            <div className="text-sm">Domain</div> */}
            </div>
          </div>
          <div className=" flex flex-col text-sm gap-3 grow">
            <div className="text-base border-black   border-b-2">
              DNS record
            </div>
            <div className="border-b border-black">
              NS record: [ 'ns2.vercel-dns.com', 'ns1.vercel-dns.com' ]
            </div>
            <div className="border-b border-black">
              A record: [ '76.76.21.22', '76.76.21.123' ]
            </div>
            <div className="border-b border-black">CNAME record: undefined</div>
            <div className="border-b border-black">AAAA record: undefined</div>
            <div className="border-b border-black">MX record: undefined</div>
            <div className="border-b border-black">TXT record: undefined</div>
            <div className="border-b border-black">SRV record: undefined</div>
            <div className="border-b border-black">PTR record: undefined</div>
            <div className="border-b border-black">
              SOA record:{" "}
              {`{
nsname: 'ns1.vercel-dns.com',
hostmaster: 'hostmaster.nsone.net',
serial: 1678636329,
refresh: 43200,
retry: 7200,
expire: 1209600,
minttl: 60
}`}
            </div>
          </div>

          <div>
            <div className="text-base border-black   border-b-2">
              HTTP Reqvest headers
            </div>
            <textarea
              rows={20}
              className="w-full p-1 text-sm border h-full"
              value={`
host: 'localhost:3000',
connection: 'keep-alive',
'cache-control': 'max-age=0',
'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
'sec-ch-ua-mobile': '?0',
'sec-ch-ua-platform': '"macOS"',
dnt: '1',
'upgrade-insecure-requests': '1',
'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.7',
'sec-fetch-site': 'same-origin',
'sec-fetch-mode': 'navigate',
'sec-fetch-user': '?1',
'sec-fetch-dest': 'document',
referer: 'http://localhost:3000/api/getwhois',
'accept-encoding': 'gzip, deflate, br',
'accept-language': 'en-US,en;q=0.9',
`}
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-base border-black">
              Alternate domain extensions sagarjaid.com
            </div>
            <span className="flex text-gray-800 flex-wrap gap-2">
              {arr &&
                arr?.map((el) => (
                  <div
                    className="flex w-full sm:w-fit justify-between p-2 border border-black rounded-md items-center"
                    key={el.extenstion}
                  >
                    <span className="flex flex-col justify-center gap-1">
                      <span className="text-xl text-green-600 font-bold">
                        {el.extenstion}
                      </span>
                      <span className="ml-1">{el.domain} </span>

                      <span className="ml-1 text-xs text-gray-500">
                        check the availability on Godaddy
                      </span>
                    </span>
                    <span className=" h-full rounded-md flex items-start">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        />
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        />
                      </svg>
                    </span>
                  </div>
                ))}
            </span>
          </div>
          <div className="flex text-sm items-center gap-2 pt-10">
            <a href="https://www.linkedin.com/in/sagarjaid/" target="_blank">
              dev: sagar jaid
            </a>
            <span>|</span>

            <a href="https://scripai.com/privacy" target="_blank">
              privacy policy
            </a>
            <span>|</span>
            <a href="https://scripai.com/tc" target="_blank">
              terms and conditions
            </a>
            <span>|</span>
            <a href="https://scripai.com/gdrp" target="_blank">
              GDRP policy
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default DomainPage;
