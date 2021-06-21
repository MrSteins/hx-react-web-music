import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom'

// import HXDiscover from '@/pages/discover'
// import HXFriend from '@/pages/friend'
// import HXMine from '@/pages/mine'
// import HXRecommend from '@/pages/discover/recommend'

const HXDiscover = lazy(() => import("@/pages/discover"))
const HXRecommend = React.lazy(_ => import("../pages/discover/recommend"));
const HXRanking = React.lazy(_ => import("../pages/discover/ranking"));
const HXSongs = React.lazy(_ => import("../pages/discover/songs"));
const HXDjradio = React.lazy(_ => import("../pages/discover/djradio"));
const HXArtist = React.lazy(_ => import("../pages/discover/artist"));
const HXAlbum = React.lazy(_ => import("../pages/discover/album"));
const HXPlayer = React.lazy(_ => import("../pages/player"));

const HXFriend = React.lazy(_ => import("../pages/friend"));
const HXMine = React.lazy(_ => import("../pages/mine"));


const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
    <Redirect path="/discover" />
    )
  },
  {
    path: '/discover',
    component: HXDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to='/discover/recommend' />
        )
      },
      {
        path: '/discover/recommend',
        component: HXRecommend
      },
      {
        path: '/discover/songs',
        component: HXSongs
      },
      {
        path: '/discover/ranking',
        component: HXRanking
      },
      {
        path: '/discover/artist',
        component: HXArtist
      },
      {
        path: '/discover/album',
        component: HXAlbum
      },
      {
        path: '/discover/djradio',
        component: HXDjradio
      },

    ]
  },
  {
    path: '/friend',
    component: HXFriend
  },
  {
    path: '/mine',
    component: HXMine
  },
  {
    path: '/player',
    component: HXPlayer
  }
]



export default routes