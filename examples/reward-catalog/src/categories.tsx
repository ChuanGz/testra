import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Alert, Button, Space, Spin, Tree, Typography } from 'antd';
import { readJson, request } from './api';

type Category = { id: string; name: string };
const branchKey = ['categories', 'events'] as const;

export function Categories() {
  const queryClient = useQueryClient();
  const branch = useQuery({
    queryKey: branchKey,
    queryFn: () => readJson<Category[]>('/api/categories?parent=events'),
  });
  const remove = useMutation({
    mutationFn: (id: string) => request(`/api/categories/${encodeURIComponent(id)}`, { method: 'DELETE' }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: branchKey }),
  });

  return (
    <section aria-label="Categories">
      <Typography.Title level={2}>Categories</Typography.Title>
      {branch.isPending && <Spin aria-label="Loading category branch" />}
      {branch.isError && <Alert type="error" title="Categories could not load" description={branch.error.message} />}
      {remove.isError && <Alert type="error" title="Category could not be deleted" description={remove.error.message} />}
      {branch.data && (
        <Tree
          defaultExpandedKeys={['events']}
          selectable={false}
          treeData={[{
            key: 'events',
            title: 'Event Rewards',
            children: branch.data.map(category => ({
              key: category.id,
              title: (
                <Space>
                  <span>{category.name}</span>
                  <Button
                    danger
                    size="small"
                    disabled={remove.isPending}
                    aria-label={`Delete ${category.name}`}
                    onClick={() => remove.mutate(category.id)}
                  >
                    Delete
                  </Button>
                </Space>
              ),
            })),
          }]}
        />
      )}
    </section>
  );
}
