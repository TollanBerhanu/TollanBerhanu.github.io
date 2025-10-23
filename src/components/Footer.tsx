import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="text-muted-foreground">by Tollan Berhanu</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © 2025 Tollan Berhanu. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;