import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Alert, Button, Drawer, Form, Input, Space, Spin, Table, Typography } from 'antd';
import { useState } from 'react';
import { readJson } from './api';

type Reward = { id: string; title: string };
const listKey = ['rewards', 'list'] as const;
const detailKey = (id: string) => ['rewards', 'detail', id] as const;
const stalePanelProof = import.meta.env.DEV && import.meta.env.VITE_STALE_PANEL_PROOF === '1';
const staleTitleKey = (id: string) => `reward-catalog:proof-title:${id}`;

export function Rewards() {
  const [selectedId, setSelectedId] = useState(() => new URLSearchParams(location.search).get('reward'));
  const rewards = useQuery({
    queryKey: listKey,
    queryFn: () => readJson<Reward[]>('/api/rewards'),
  });

  function selectReward(id: string | null) {
    const url = new URL(location.href);
    if (id) {
      url.searchParams.set('reward', id);
    } else {
      url.searchParams.delete('reward');
    }
    history.replaceState(null, '', url);
    setSelectedId(id);
  }

  return (
    <section aria-label="Rewards">
      <Typography.Title level={2}>Rewards</Typography.Title>
      {rewards.isError && <Alert type="error" title="Rewards could not load" description={rewards.error.message} />}
      <Table<Reward>
        aria-label="Reward grid"
        rowKey="id"
        dataSource={rewards.data ?? []}
        loading={rewards.isPending}
        pagination={false}
        columns={[
          { title: 'ID', dataIndex: 'id' },
          { title: 'Title', dataIndex: 'title' },
          {
            title: 'Actions',
            render: (_, reward) => (
              <Button onClick={() => {
                if (stalePanelProof) {
                  sessionStorage.setItem(staleTitleKey(reward.id), reward.title);
                }
                selectReward(reward.id);
              }}>
                Edit {reward.title}
              </Button>
            ),
          },
        ]}
      />
      {selectedId && <RewardEditor key={selectedId} id={selectedId} onClose={() => selectReward(null)} />}
    </section>
  );
}

function RewardEditor({ id, onClose }: { id: string; onClose: () => void }) {
  const queryClient = useQueryClient();
  const path = `/api/rewards/${encodeURIComponent(id)}`;
  const reward = useQuery({
    queryKey: detailKey(id),
    queryFn: () => readJson<Reward>(path),
  });
  const rename = useMutation({
    mutationFn: (title: string) => readJson<Reward>(path, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    }),
    onSuccess: () => Promise.all([
      queryClient.invalidateQueries({ queryKey: listKey }),
      queryClient.invalidateQueries({ queryKey: detailKey(id) }),
    ]),
  });
  // The proof run deliberately reads the title captured before Save, even after reload.
  const savedTitle = stalePanelProof ? sessionStorage.getItem(staleTitleKey(id)) : null;
  const displayTitle = savedTitle ?? reward.data?.title;

  return (
    <Drawer open title="Edit reward" size="default" onClose={onClose}>
      {reward.isPending && <Spin aria-label="Loading reward" />}
      {reward.isError && <Alert type="error" title="Reward could not load" description={reward.error.message} />}
      {displayTitle !== undefined && (
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Typography.Text>Reward ID {id}</Typography.Text>
          <Form
            key={reward.data?.title}
            layout="vertical"
            initialValues={{ title: displayTitle }}
            onFinish={({ title }: { title: string }) => rename.mutate(title)}
          >
            <Form.Item name="title" label="Reward title" rules={[{ required: true, whitespace: true }]}>
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={rename.isPending}>Save</Button>
          </Form>
          {rename.isSuccess && <p role="status">Reward saved</p>}
          {rename.isError && <Alert type="error" title="Reward could not save" description={rename.error.message} />}
        </Space>
      )}
    </Drawer>
  );
}
