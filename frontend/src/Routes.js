import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import Auth from '@/pages/Auth/Auth';
import ErrorPage from '@/pages/Error/Error';
// Core
import TypographyPage from '@/pages/Typography/Typography';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

// Member
import DataMember from '@/pages/Member/Member';

// Verify
import DataMemberVerify from '@/pages/Verify/Verify';

// Bonus
import DataMemberBonus from '@/pages/Bonus/Bonus';

// Withdrawal
import DataMemberWithdrawal from '@/pages/Withdrawal/Withdrawal'

// Deposit
import DataMemberDeposit from '@/pages/Deposit/Deposit';

// Support
import ProblemSupportMember from '@/pages/Support/Support';

// Faq
import FaqMember from '@/pages/Faq/Faq';

// Network
import MemberNetwork from '@/pages/Network/Network';

// Maps
import GoogleMapPage from '@/pages/Maps/Google';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';

// Charts
import ChartsPage from '@/pages/Charts/Charts';

// Ui
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
        {
          path: 'member',
          name: 'DataMember',
          component: DataMember,
        },
        {
          path: 'network',
          name: 'MemberNetwork',
          component: MemberNetwork,
        },
        {
          path: 'verify',
          name: 'DataMemberVerify',
          component: DataMemberVerify,
        },
        {
          path: 'bonus',
          name: 'DataMemberBonus',
          component: DataMemberBonus,
        },
        {
          path: 'deposit',
          name: 'DataMemberDeposit',
          component: DataMemberDeposit,
        },
        {
          path: 'withdrawal',
          name: 'DataMemberWithdrawal',
          component: DataMemberWithdrawal,
        },
        {
          path: 'support',
          name: 'ProbelemSupportMember',
          component: ProblemSupportMember,
        },
        {
          path: 'faq',
          name: 'FaqMember',
          component: FaqMember,
        },
        {
          path: 'typography',
          name: 'TypographyPage',
          component: TypographyPage,
        },
        {
          path: 'components/icons',
          name: 'IconsPage',
          component: IconsPage,
        },
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'components/charts',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'tables',
          name: 'TablesBasicPage',
          component: TablesBasicPage,
        },
        {
          path: 'components/maps',
          name: 'GoogleMapPage',
          component: GoogleMapPage,
        },
      ],
    },
  ],
});
