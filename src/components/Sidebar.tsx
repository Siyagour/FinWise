import { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu } from 'lucide-react';

export interface DashboardNavItem {
  label: string;
  path: string;
}

interface SidebarProps {
  items: DashboardNavItem[];
  activePath: string;
  onNavigate: (path: string) => void;
}

const drawerWidth = 260;

export default function Sidebar({ items, activePath, onNavigate }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setMobileOpen(false);
  };

  const drawerContent = (
    <Box sx={{ height: '100%', backgroundColor: '#0f5132', color: '#fff' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          FinWise
        </Typography>
      </Toolbar>
      <List>
        {items.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              selected={activePath === item.path}
              onClick={() => handleNavigate(item.path)}
              sx={{
                mx: 1,
                borderRadius: 1.5,
                '&.Mui-selected': {
                  backgroundColor: 'rgba(255,255,255,0.16)',
                },
                '&.Mui-selected:hover': {
                  backgroundColor: 'rgba(255,255,255,0.22)',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        onClick={() => setMobileOpen(true)}
        sx={{
          display: { xs: 'inline-flex', md: 'none' },
          position: 'fixed',
          top: 12,
          left: 12,
          zIndex: 1301,
          backgroundColor: '#fff',
          border: '1px solid #e5e7eb',
        }}
      >
        <Menu size={20} />
      </IconButton>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: 'none',
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
