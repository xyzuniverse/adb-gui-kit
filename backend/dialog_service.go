package backend

import (
	"fmt"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// SelectImageFile opens a native file picker restricted to *.img files.
func (a *App) SelectImageFile() (string, error) {
	if a.ctx == nil {
		return "", fmt.Errorf("application context not initialised")
	}

	selectedPath, err := runtime.OpenFileDialog(a.ctx, runtime.OpenDialogOptions{
		Title: "Select Image File",
		Filters: []runtime.FileFilter{
			{
				DisplayName: "Image Files (*.img)",
				Pattern:     "*.img",
			},
		},
	})
	if err != nil {
		return "", err
	}

	return selectedPath, nil
}
