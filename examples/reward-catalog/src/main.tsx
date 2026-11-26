import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, Space, Typography } from 'antd';
import { createRoot } from 'react-dom/client';
import 'antd/dist/reset.css';
import './styles.css';
import { Categories } from './categories';
import { Rewards } from './rewards';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider theme={{ token: { motion: false } }}>
      <main>
        <Typography.Title>Reward Catalog</Typography.Title>
        <nav aria-label="Catalog pages">
          <Space>
            <a href="/">Rewards</a>
            <a href="/categories">Categories</a>
          </Space>
        </nav>
        {location.pathname === '/categories' ? <Categories /> : <Rewards />}
      </main>
    </ConfigProvider>
  </QueryClientProvider>,
);
