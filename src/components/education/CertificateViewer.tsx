
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { View, ExternalLink } from "lucide-react";

interface CertificateViewerProps {
  certificate: {
    name: string;
    organization: string;
    issued: string;
    expires: string | null;
    credentialId?: string;
    description: string;
    certificateUrl?: string;
    imageUrl?: string;
  };
}

const CertificateViewer = ({ certificate }: CertificateViewerProps) => {
  return (
    <Dialog>
      <Button 
        variant="outline" 
        size="sm" 
        className="flex items-center gap-1 text-xs"
      >
        <View className="h-3.5 w-3.5" />
        View
      </Button>
      
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">{certificate.name}</DialogTitle>
          <DialogDescription className="text-theme-light-blue">
            {certificate.organization} • Issued: {certificate.issued}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-4">
          <div className="bg-gray-100 rounded-md p-4 flex items-center justify-center">
            {certificate.imageUrl ? (
              <img 
                src={certificate.imageUrl} 
                alt={`${certificate.name} Certificate`} 
                className="max-w-full max-h-[400px] object-contain"
              />
            ) : (
              <div className="py-12 text-center w-full">
                <p className="text-muted-foreground">Preview unavailable</p>
                <p className="text-xs text-gray-400">Certificate image not provided</p>
              </div>
            )}
          </div>
          
          <div>
            <p className="text-sm mb-3">{certificate.description}</p>
            {certificate.credentialId && (
              <p className="text-xs text-gray-500 mb-1">
                <span className="font-medium">Credential ID:</span> {certificate.credentialId}
              </p>
            )}
            {certificate.expires && (
              <p className="text-xs text-gray-500">
                <span className="font-medium">Expires:</span> {certificate.expires}
              </p>
            )}
          </div>
          
          <div className="flex justify-between mt-2">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            
            {certificate.certificateUrl && (
              <Button asChild>
                <a 
                  href={certificate.certificateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Original
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateViewer;
