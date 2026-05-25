# Satellite Data Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AISatelliteDataOperationsAssistant`
- `AISatelliteDataOperationsOperations`
- `AISatelliteDataOperationsAnalytics`
- `AISatelliteDataOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/satellite-data-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4950`

Seeded users:
- `admin@satellite-data-operations.local / admin123`
- `manager@satellite-data-operations.local / manager123`
- `analyst@satellite-data-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/satellite-data-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4950 npm run smoke
```
